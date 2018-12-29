import styled from 'styled-components'

// Home 页主要布局结构
export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`

export const HomeLeft = styled.div`
  margin-left: 15px;
  padding-top: 30px;
  width: 625px;
  float: left;
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
// Swiper 组件
export const SwiperWrapper = styled.div`
width: 625px;
height: 270px;
img{
  width : 100% ;
}
.swiper-container .hide{
  opacity:0;
}
.swiper-button-next,.swiper-button-prev{
  transition:opacity .5s;
}
.swiper-container{
  z-index:0;
}

`


// Topic 组件 
export const TopicWrapper = styled.div`
  overflow: hidden;
  padding: 20px 0 10px 0;
  margin-left: -18px;
  border-bottom: 1px solid #dcdcdc;
`

export const TopicItem = styled.div`
  float: left;
  height: 32px;
  padding-right: 10px;
  margin-left: 18px;
  margin-bottom: 18px;
  line-height: 32px;
  background: #f7f7f7;
  font-size: 14px;
  color: #000;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  
  .topic-pic {
    display: block;
    float: left;
    width: 32px;
    height: 32px;
    margin-right: 10px;
  }
`
// List 组件
export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic {
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`

export const ListInfo = styled.div`
  width: 500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: 700;
    color: #333;
    font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  }
  .title:hover{
    text-decoration: underline;
    cursor :pointer;
  }
  .desc {
    line-height: 24px;
    font-size: 13px;
    color: #999;
  }
`