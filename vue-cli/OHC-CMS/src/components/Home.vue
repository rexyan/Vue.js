<style scoped>
  .layout {
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
  }

  .layout-logo {
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
  }

  .layout-nav {
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
  }

  .layout-footer-center {
    text-align: center;
  }


</style>
<template>
  <div class="layout">
    <Layout>
      <Header>
        <Menu mode="horizontal" theme="dark" active-name="1">
          <!--Logo-->
          <div class="layout-logo"></div>
          <!--导航栏信息-->
          <div class="layout-nav">
            <MenuItem name='item.name' v-for="item in nav_list">
              <Icon type="ios-navigate"></Icon>
              {{ item.name }}
            </MenuItem>
          </div>
        </Menu>
      </Header>
      <Content :style="{padding: '0 50px'}">
        <Content>
          <div style="max-width: 67%;margin-right: auto;margin-left: auto;margin-top: 20px;margin-bottom: 20px;">
            <Carousel autoplay loop>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://ww4.sinaimg.cn/large/991a4176gw1f0prbvc4zmj20ws09qdld.jpg">
                </div>
              </CarouselItem>
              <CarouselItem>
                <div class="demo-carousel">
                  <img src="http://blog.wdyun.cn/content/uploadfile/201503/7b1a1425208684.png">
                </div>
              </CarouselItem>
            </Carousel>
          </div>
        </Content>
        <Card style="border: 1px solid #CCC;max-width: 67%;margin-left: auto;margin-right: auto">
          <div style="min-height: 200px;max-width: 100%;margin-left: auto;margin-right: auto">
            <!--主体内容部分-->
            <Row>
              <Col :xs="17" :sm="17" :md="17" :lg="17">
                <!--文章列表部分-->

                <Card style="width:390px;border: 1px solid #CCC;margin-bottom: 20px;">
                  <div style="text-align:center">
                    <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                  </div>
                </Card>

                <Card
                  style="width:390px;border: 1px solid #CCC;margin-left: 410px;margin-top: -264px;margin-bottom: 20px;">
                  <div style="text-align:center">
                    <img src="https://file.iviewui.com/dist/2ecd3b0452aa197097d5131afacab7b8.png">
                    <h3>A high quality UI Toolkit based on Vue.js</h3>
                  </div>
                </Card>
                <!--文章列表-->
                <ArticleList :article_data="item" v-for="item in article_data"></ArticleList>

              </Col>
              <Col :xs="1" :sm="1" :md="1" :lg="1">&nbsp;</Col>
              <Col :xs="6" :sm="6" :md="6" :lg="6">
                <!--右边栏模块-->
                <Card style="width:260px;border: 1px solid #CCC;margin-bottom: 20px;">
                  <div style="text-align:center">
                    <img src="">
                    <h3>公告：xxxxxxxxxx</h3>
                  </div>
                </Card>

                <Card style="width:260px;border: 1px solid #CCC;">
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                  <Tag>标签一</Tag>
                  <Tag>标签二</Tag>
                </Card>

              </Col>
            </Row>

            <div>
              <Card style="width:49%;border: 1px solid #CCC;">
                <Table :columns="columns1" :data="data1"></Table>
              </Card>
              <Card style="width:49%;border: 1px solid #CCC;float: right;margin-top: -265px;">
                <Table :columns="columns1" :data="data1"></Table>
              </Card>
            </div>
            <!--分页信息-->
            <Page :total="40" size="small" show-elevator show-sizer style="margin-top: 20px;"/>
          </div>
        </Card>
      </Content>
      <Footer style="border: 1px solid #CCC;min-width: 64%;margin-left: auto;margin-right: auto;margin-top: 20px;"
              class="layout-footer-center">
        <!--底部信息-->
        {{ footer_info }}
        <!--返回顶部按钮-->
        <BackTop></BackTop>
      </Footer>
    </Layout>
  </div>
</template>


<script>
  import ArticleList from './ArticleList.vue'

  export default {
    name: 'home',
    components: {ArticleList},
    data() {
      return {
        footer_info: '2011-2016 &copy; OurHome-SH',
        article_data: [
          {
            article_title: '文章默认标题',
            brief_description: '这两天在做一个项目的时候需要注册、登录功能，于是就做了一个\n' +
            '\n' +
            '\n' +
            '样式用的jiawin（觉唯）的注册与登录样式，ajax提交、前端验证、后端验证是自己写的 \n' +
            '\n' +
            '\n' +
            '项目参考：\n' +
            '\n' +
            'emlog用户注册插件：http://www.emlog.net/plugin/135\n' +
            '\n' +
            '匿名投稿插件：http://www.emlog.net/plugin/181',
            thumbs_up: 0,
            img_src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
          },
          {
            article_title: '文章默认标题',
            brief_description: '文章默认标题',
            thumbs_up: 0,
            img_src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
          },
          {
            article_title: '文章默认标题',
            brief_description: '文章默认标题',
            thumbs_up: 0,
            img_src: 'https://i.loli.net/2017/08/21/599a521472424.jpg'
          }
        ],
        columns1: [
          {
            title: '技术',
            key: 'name'
          }
        ],
        data1: [
          {
            name: 'John Brown',
          },
          {
            name: 'Jim Green',
          },
          {
            name: 'Joe Black',
          },
          {
            name: 'Jon Snow',
          }
        ]

      }
    },
    computed: {
      nav_list: function () {
        return [
          {
            name: '注册',
            type: 'ios-keypad',
            url: 'register'
          },
          {
            name: '登录',
            type: 'ios-analytics',
            url: 'login'
          },
          {
            name: '管理中心',
            type: 'ios-paper',
            url: 'admin'
          }
        ]
      }
    }
  }
</script>

