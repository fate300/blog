<template>
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Vuelog</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Pricing</a>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<div class="container mt-4">
<h5>Vue 장인 입니다</h5>
 <p>Vue로 만들었다고</p>
</div>

<List :블로그글="블로그글"/>

</template>

<script>
//7월5일 블로그 글목록을 만들어보자 & 데이터바인딩, props 복습
//props 보낼때 1. 보내고 => <List :블로그글="블로그글" /> 2. 등록하고 3.쓰면됨 


//7월4일 Blog 프로젝트 생성과 뷰에서 Bootstrap 4, 5 사용법
//Bootstrap 사이트에서 introduction에서 찾아서 css와 js 파일 링크 붙이면됨  
//=>publc의 index.html에 css는 head에 js는 body 끝나기 전에 
//npm으로 설치가능 terminal 완전 종료후에 최신버전 설치명령어 =>npm install bootstrap@latest
//잘 설치되면 <template>에 붙여넣으면 됨 

import List from './List.vue';
import blog from './assets/blog.js' ; 

export default {
  name: 'App',
data(){
return{
블로그글: blog,

}

},
  components: {
    List,
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 10px;
}
</style>
