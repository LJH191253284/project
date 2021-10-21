<template>
  <div>
    <Nav></Nav>

    <div class="page">
      <div class="user_comp">
        <header>
          <!--个人头像-->
          <img
            class="img_head"
            src="https://s1.ljcdn.com/hulk-web/static/m/images/user/mine_head.png?_v=20210928143225ba3"
            alt=""
          />
          <!--登录注册-->
          <div class="user_num">
            <div @click="$router.push('/signln')">登录</div>
            <div  @click="$router.push('/register')">注册</div>
          </div>
        </header>
      </div>
      <!--背景图 end-->
      <div class="content_area">
        <div class="pagelist">
          <ul class="link_list">
            <li @click="$router.push('/followList')">
              <span class="list_item"></span>
              <a >我关注的二手房</a>
              <span class="right_arrow"></span>
            </li>

            <li>
              <span class="list_item two"></span>
              <a >我关注的小区</a>
              <span class="right_arrow"></span>
            </li>

            <li>
              <span class="list_item three"></span>
              <a >我关注的新房</a>
              <span class="right_arrow"></span>
            </li>

            <li>
              <span class="list_item four"></span>
              <a >我关注的租房</a>
              <span class="right_arrow"></span>
            </li>

            <li>
              <span class="list_item five"></span>
              <a >免电话营销</a>
              <span class="right_arrow"></span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Nav from "../components/Nav.vue";
export default {
  components: { Nav },
};
</script>

<style lang="less" scoped>
.page {
  width: 100%;
  height: auto;
  .user_comp {
    width: 100%;
    height: 19rem;
    background: url(../image/个人中心绿色背景.png) no-repeat 0 0;
    background-size: 375px 50vh;
    header {
      width: 100%;
      .nav {
        display: flex;
        justify-content: space-between;
        width: 375px;
        height: 50px;
        margin: 0 auto;
        background-color: white;
        .left {
          width: 112px;
          height: 49px;
          display: flex;

          a {
            width: 25px;
            height: 25px;
            line-height: 25px;
            .l_icon {
              width: 25px;
              height: 25px;
              line-height: 25px;
              //   background: url("../image/个人中心雪碧图.png") no-repeat 0 0;
              background-size: 135px 240px;
              background-position: -5px -31px;
              margin-top: 10px;
            }
          }

          .city_warp {
            height: 49px;
            line-height: 49px;
            margin-left: 20px;
          }
        } //

        .middle {
          width: 112px;
          height: 49px;
          //   background: url("../image/链家logo.png") no-repeat 0 0;
          background-size: 85px 49px;
          background-position: 20px 0px;
        }
        .right {
          width: 112px;
          height: 49px;
          line-height: 49px;
          .r_icon {
            width: 50px;
            height: 49px;
            background: url("../image/个人中心雪碧图.png") no-repeat 0 0;
            background-size: 187px 370px;
            background-position: 17px 6px;
            float: right;
            margin-right: 15px;
          }
        }
      } //nav

      .img_head {
        width: 54px;
        height: 54px;
        margin-top: 32px;
        margin-left: 162.5px;
      }
      .user_num {
        width: 375px;
        height: 37px;
        margin-top: 18.4px;

        div {
          border: 0.5px solid white;
          display: inline-block;
          color: white;
          text-align: center;
          width: 89px;
          height: 37px;
          line-height: 37px;
          margin-left: 95px;
        }
        :nth-child(2) {
          margin-left: 4.8px;
        }
      }
    } //头部 end
  } //背景绿 end

  //内容列表
  .content_area {
    width: 100%;
    height: auto;
    display: inline-block;
    .pagelist {
      width: 375px;
      .link_list {
        width: 375px;
        height: auto;
        margin: 0 auto;
        li {
          width: 100%;
          height: 51px;
          background-color: white;
          border: 0.5px solid rgb(249, 249, 249);
          a {
            color: black;
            margin-left: 15px;
            height: 51px;
            line-height: 51px;
          }
          .list_item {
            width: 16px;
            height: 16px;
            line-height: 51px;
            background: url("https://s1.ljcdn.com/hulk-web/static/m/statics/images/user/list-icon.png?version=60b7e28422")
              no-repeat;
            background-size: 100% 500%;
            background-position-y: 2px;
            float: left;
            margin-top: 15px;
            margin-left: 15px;
          }
          .right_arrow {
            float: right;
            border-right: 1px solid #999;
            border-top: 1px solid #999;
            -webkit-transform: rotate(45deg);
            transform: rotate(45deg);
            width: 15px;
            height: 15px;
            margin-right: 30px;
            margin-top: 20px;
          }

          .two {
            background-size: 100% 500%;
            background-position-y: -15px;
          }
          .three {
            background-size: 100% 500%;
            background-position-y: -32px;
          }
          .four {
            background-size: 100% 500%;
            background-position-y: -48px;
          }
          .five {
            background-size: 100% 500%;
            background-position-y: -64px;
          }
        }
      }
    }
  }
} //主页 end
</style>