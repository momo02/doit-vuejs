//파일 경로와 웹팩 라이브러리 로딩
var path = require('path')
var webpack = require('webpack')

module.exports = {
  //entry : 웹팩으로 빌드(변환)할 대상 파일을 지정하는 속성.
  entry: './src/main.js', //main.js파일에 정의한 내용에 따라 애플리케이션의 구성 요소 및 파일들이 웹팩으로 번들링(빌드)됨.
  //output : 웹팩으로 빌드를 하고 난 결과물 파일의 위치와 이름을 지정. 결과물 파일의 위치는 dist/build.js
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  //웹팩으로 애플리케이션 파일들을 빌드(변환)할 때 HTML,CSS,PNG(이미지)등의 파일을 자바스크립트로 변환해주는 로더를 지정.
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader'
        ],
      },      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
          }
          // other vue-loader options go here
        }
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.(png|jpg|gif|svg)$/,
        loader: 'file-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  //웹팩으로 빌드할 때 뷰 라이브러리의 여러 유형 중 어떤 걸 선택할지 지정.
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.esm.js' //vue.esm.js는 최신 웹팩 버전과 사용할 수 있는 Full 버전의 라이브러리를 의미.
      //이렇게 별도로 설정하지 않으면 런타임 버전인 vue.runtime.esm.js를 사용.
    },
    extensions: ['*', '.js', '.vue', '.json']
  },
  //웹팩 데브 서버 관련 속성을 지정.
  devServer: {
    historyApiFallback: true, //클라이언트 사이드 라우팅인 뷰 라우터와 함께 사용하기 위해 true로 지정.
    noInfo: true, //처음 서버를 시작할 때만 웹팩 빌드 정보를 보여주고, 이후 변경 시에는 빌드 정보를 보여주지 않음.
    overlay: true //웹팩으로 빌드할 때 오류가 있으면 브라우저 화면 전체에 오류를 표시.
  },
  //웹팩으로 빌드한 파일의 크기가 250kb를 넘으면 경고 메시지를 표시할지를 설정.
  //hints가 false이므로 크기와 관계 없이 경고가 표시되지 않음.
  performance: {
    hints: false
  },
  //웹팩으로 빌드된 파일로 웹 앱을 구동했을 때 개발자 도구에서 사용할 디버깅 방식을 지정.
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map' //개발자 도구 분석 옵션을 #source-map으로 지정.
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    // 자바스크립트 파일의 크기를 줄이는 Uglify 플러그인과 환경 변수 값을 설정.. 
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    }),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
      compress: {
        warnings: false
      }
    }),
    new webpack.LoaderOptionsPlugin({
      minimize: true
    })
  ])
}
