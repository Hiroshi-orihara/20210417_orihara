<template>
  <div id="app">
    <router-view />
  </div>
</template>



<!--
■ネットで参考にしたソースコードは、メソッドないでaxiosを使用していない、APIのURLも使用していない、取得したデータの取り出し方もよくわからない。これでは課題をクリアしていないし、そもそも理解していないのはダメ。
【自分の考えたこと】
App.vue、Home.Vue(子コンポーネント)、About.Vue(親コンポーネント)、index.js/router、index.js/storeを使う。
・About.Vueのmethod内でaxiosを使用してAPIを叩く処理をする。それを、Home.Vueを送る。
⇒app.vue、index.js/routerはたぶん完成している。
⇒Home.Vue、About.Vue、index.js/storeを修正すること。
【課題】
・何から手を付けて良いのか、わかっていない。
・問題を切り分けて考えることが出来ていない。
・何にindex.js/routerを使う、何にindex.js/storeを使うのか、Home.Vue、About.Vueの使い方、JSONについて、コンポーネントの使い方がよくわかっていない。・・・基礎学習が足りないのか？
-->