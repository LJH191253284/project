<template>
  <div class="home">
    <van-nav-bar title="标题" right-text="按钮" left-arrow>
      <template #left>
        <img
          class="logo"
          src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAToAAABIBAMAAACU8SQRAAAALVBMVEVHcEz////////////////////////////////////////////////////////NXt0CAAAADnRSTlMA4fGcFXjOJ7Q7WmlLh+5Ft9UAAAOBSURBVGje5ZpNaxNBGMfHJmnaWEPxIl5CDl68hIIHPZUIS/VUetBrqSAeQw5CPYUcRDwF8SaI5Oyh5C7I4lmkX0AwSV82L93PYLKZzO48u7M7MztP3OJz6TJMpj/+O/O8zRKytIYbtiPC2Q06PCYkx0+8IPH2fT6pTfStE0HXzgydGe344a6Ybs2bMFqnM89Jwfs73KID/WtAt3humnqzaekcAV22tUOh241Y1K0G6AjZ4OkI2bx+dBIWoBNZWjon03S42gH7T+iiTsXCtldI5+jTPaYDE2thT44DhqtdJ46u7CZZX3wqTn1v3EJ5s8l0Tqbpzs3QOTh0UxTtQAbV48a+yNOdZZqummm6Nsq+M0V3mmntuuHFbOqNY+gCR74Q6T8N0TVR6IBHEdCJ4ixbckAQ6eqadBuCghaJTjFHWRYt892sRidn6ejYfpxg0hFNutZyzkgxc19LPGaD9HQnyzl/EOnmTxUdukNYW2aKrgN7Grh0PbWqh22HA0S6vi4dW8vOIF2RrVVXrbb95o9nL2M8yoUmXSkUs5XobsGqRJMuOQugiEHXbsdVjHwz2Mu/8r5T65mnG9LlmpJ0ey6INDkXBkYmbCVd1UPLsijtBJGsyP7jwIbu031rnG4q0E5A95H98C7bxzWW89RN010qaRci4Ynv+3RDI3RVJe1Cb9F72+xgDLqG6Y5UtAufAM+e8s0FNqGWmm5HQbu8700eWpYV1bXaCdM981pfGlUP9Uay2u25CZn7Yjt6D1eMTrsmm9kHee02K8l07h1ZOmHvM7hmXV67H64E3cwNsh2oR5cDVZScdjddGbpZCElJtw76i9Jndl++uzjRpgvkaVdExd+1VkHX8unGJrRzjNL94gMZinbjJG8spPPj0aJolM7v9ldBtwsuJKXzOwW6qTZdgw9kqbVzjNIFfnWApd0oVK9I0hUD02ysfadNtwUCGYp2c2fg38e9tgIWX20XotqBpvfdpVw3LUyXgxdl0tqV1bTTolsHgUxeOwW6M126MghkKNrJ3TLF9T6X3U+gnfhrmbLCHaMu3QkIZFA7ZTqj2h2CQJZaO6N0HXiNh6FdX5euAQIZvBFI+kpL6jblXkeTDgYyFLrtUk2Lrii6xjNLR95o0ZVAmxeLjnz++u357weP3r96cbsm/2ZjPyK103+Vyt2FUMtbx59+Utp3M9p/RvcXlN2FjxlfktkAAAAASUVORK5CYII="
        />
      </template>
      <template #title>
        <div class="btn">
          <span
            :class="{ active: gender === 'male' }"
            @click="$router.replace({ path: '/', query: { gender: 'male' } })"
            >男生</span
          >
          <span
            :class="{ active: gender === 'female' }"
            @click="$router.replace({ path: '/', query: { gender: 'female' } })"
            >女生</span
          >
        </div>
      </template>
      <template #right>
        <van-icon
          @click="$router.push('/mybooks')"
          size="24"
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyBAMAAADsEZWCAAAAKlBMVEVHcEz///////////////////////////////////////////////////+LBpLMAAAADXRSTlMApSzS4boSaI048EtBf5mWRgAAANhJREFUOMvV0z0KwjAYxvGItVqK4AWEro6CqyDSVRB3wQsI7iLoAQQv4OxBvIDgt/DexTchjX3gOYDN8ELz69D+Q4ypwornIicqLdG1YFKzkv2F9H57ySDPZ17S3VA6Qeq6dffS1TEK0tanq5eJjgcVTSRvKnsdTyobHS8qR/c1TJY6blQiOIuyNOw8MHHnt2LStHPLJLFzyiSWcriyGAgHAuFAIBwIhAOBcCAQDgTCgUA4EAgHAuFAIBwIhANx4S5eIvdzxZ3TcJ/iC1J9bRzu6bm/zkxl1xfJoE8h5ybMjAAAAABJRU5ErkJggg=="
        ></van-icon>
        <van-icon
          size="24"
          name="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkBAMAAACCzIhnAAAAJ1BMVEVHcEz///////////////////////////////////////////////8NopmKAAAADHRSTlMA1sQO8CSnQW6ZWoSHROfVAAABhklEQVRYw+2Yr0+DMRCGl8HGwELAfGLJFGRi4AADCUFNoAgkiJGAmwCHQGAIZoJAcAgCFofFdCnj1/1RJGRhtGt7710yBPke/+Tr3bXvLSsUcnJcdvabdvZcYtzTNwu4cUx95lBjmX64xoyx+kDpNiBlkX4xLf0I+JlJcrgElFNXeQWUzFUMb0yRxx2rFH2lyip7vvLCKh1feWOVtq/0pA1DWtb0FcsqNMQoFMXBFOUrmqwYpeLCKK6l4vIrnpjmISviQhFKiuhzPmMao4pxzbLQrCTN4vtXnFzNbKzPX+DCykF/LpsPoLE7CCZ7AxnbzuU/BIxVN/zsE2uU/OwzW+IcY4OsPBzj1BK8YugxL1GIWkqpB5WusBKmmk5EiTdtgmIcQQlGUJzdRpV38bmiJysmlCq0JpCdkSUUIy4lUkw5qbSg9c3v8uek8imtPlx/idIEIqDCKGey2UfmP84oa9IeB7v8yCgf0rEEB9NmlB6aR8lkyhjFyBUL/KbmFeLI/2zI+TO+AHPambLIoiO3AAAAAElFTkSuQmCC"
        ></van-icon>
      </template>
    </van-nav-bar>
    <section class="search">
      <van-search
        v-model="value"
        left-icon=""
        right-icon="search"
      />
      <van-swipe
        class="search-swipe"
        :autoplay="3000"
        vertical
        :show-indicators="false"
      >
        <van-swipe-item v-for="item in hotSearch" :key="item">{{item}}</van-swipe-item>
       
      </van-swipe>
    </section>
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  data: function () {
    return {
      gender: "male",
      value: "",
      hotSearch:["霸道总裁爱上我","斗破苍穹","斗罗大陆"]
    };
  },
  beforeRouteEnter: function (to, from, next) {
    next((vm) => {
      vm.gender = to.query.gender || "male";
    });
  },
  beforeRouteUpdate: function (to, from, next) {
    this.gender = to.query.gender || "female";
    next();
  },
};
</script>

<style lang="less" scoped>
.home {
  .van-nav-bar {
    background: #b83320;
    .logo {
      height: 18px;
    }
    .btn {
      font-size: 0;
      span {
        line-height: 24px;
        padding: 0 5px;
        font-size: 14px;
        display: inline-block;
        border: 1px solid white;
        &:first-child {
          border-radius: 12px 0 0 12px;
        }
        &:last-child {
          border-radius: 0 12px 12px 0;
        }
        &.active {
          background: white;
        }
      }
    }
  }
  .search {
    position: relative;
    .van-search{
      padding: 5px 10px;
    }
    .search-swipe {
      position: absolute;
      top: 0px;
      left: 28px;
      width: 50%;
      height: 34px;
      line-height: 100%;
      .van-swipe-item{
        line-height: 34px;
        color: #999;
        font-size: 12px;
      
      }
    }
  }
}
</style>