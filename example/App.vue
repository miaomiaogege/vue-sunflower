<template>
  <div class="container">
    <nav>
      <ul class="menu-left">
        <router-link to="/alert" tag="li">Alert</router-link>
        <router-link to="/ajax" tag="li">Ajax</router-link>
        <router-link to="/badge" tag="li">Badge</router-link>
        <router-link to="/box" tag="li">Box</router-link>
        <router-link to="/breadcrumb" tag="li">Breadcrumb</router-link>
        <router-link to="/button" tag="li">Button</router-link>
        <router-link to="/card" tag="li">Card</router-link>
        <router-link to="/carousel" tag="li">Carousel</router-link>
        <router-link to="/cascader" tag="li">Cascader</router-link>
        <router-link to="/checkbox" tag="li">Checkbox</router-link>
        <router-link to="/collapse" tag="li">Collapse</router-link>
        <router-link to="/date-picker" tag="li">DatePicker</router-link>
        <router-link to="/dialog" tag="li">Dialog</router-link>
        <router-link to="/dropdown" tag="li">Dropdown</router-link>
        <router-link to="/form" tag="li">Form</router-link>
        <router-link to="/grid" tag="li">Grid</router-link>
        <router-link to="/input" tag="li">Input</router-link>
        <router-link to="/input-number" tag="li">InputNumber</router-link>
        <router-link to="/scrollbar" tag="li">Scrollbar</router-link>
        <router-link to="./switch" tag="li">Switch</router-link>
        <router-link to="/time-picker" tag="li">TimePicker</router-link>
        <router-link to="/time-select" tag="li">TimeSelect</router-link>
      </ul>
    </nav>
    <main class="main">
      <router-view></router-view>
    </main>
  </div>
</template>
<script>
  export default {

  }
</script>
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #eee;
    color: #657180;
  }
  ul, li {
    list-style: none;
  }
  .container {
    background: #fff;
    width: 90%;
    margin: 30px auto 20px;
    border-radius: 6px;
    box-shadow: 0 1px 1px 0 rgba(0, 0, 0, 0.1);
  }
  .container:after {
    content: '';
    clear: both;
    display: block;
  }
  nav {
    display: block;
    width: 16.66666667%;
    float: left;
    padding: 16px 0;
  }
  ul.menu-left {
    position: relative;
  }
  ul.menu-left:after {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    z-index: 1;
  }
  ul.menu-left li {
    padding: 14px 24px;
    cursor: pointer;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    border-right: 2px solid transparent;
    z-index: 1;
    position: relative;
  }
  ul.menu-left li.router-link-active {
    color: #39f;
    border-right: 2px solid #39f;
    z-index: 2;
  }
  .main {
    display: block;
    width: 83.333333%;
    float: left;
    padding: 20px 25px;
    position: relative;
  }
  .main:before {
    content: "";
    display: block;
    width: 1px;
    height: 100%;
    background: #d7dde4;
    position: absolute;
    top: 0;
    bottom: 0;
    left: -1px;
    z-index: 1;
  }
</style>