<template>
  <div style="background-color: black; width: 100%">
    <div style="padding-top: 200px"></div>
    <div class="main" id="maintag">
      <div class="parentDiv">
        <div class="light">
          <!--<a  id="boxclose_1" class="boxclose lightbox_close"></a>-->
          <video
            class="VisaChipCardVideo"
            id="VisaChipCardVideo1"
            width=""
            v-on:click="videocontrol(1)"
          >
            <!-- <source src="ango 1_23.97.mp4" type="video/mp4"> -->
            <source
              src="/Images/c1/sectionFour/ango 1_23.97.mp4"
              type="video/mp4"
            />
            <!--Browser does not support <video> tag -->
          </video>
        </div>
        <!--<div class="fade" ></div>-->
        <div class="title">
          <span
            v-on:click="videocontrol(1)"
            class="lightbox_open"
            id="1"
            style="color: #ffffff"
          >
            بقول بنتي
          </span>
        </div>
      </div>

      <div class="parentDiv">
        <div class="light">
          <!--<a class="boxclose lightbox_close" id="boxclose_2" ></a>-->
          <video
            class="VisaChipCardVideo"
            id="VisaChipCardVideo2"
            width=""
            v-on:click="videocontrol(2)"
          >
            <!-- <source src="ango 2_23.97.mp4" type="video/mp4"> -->
            <source
              src="/Images/c1/sectionFour/ango 2_23.97.mp4"
              type="video/mp4"
            />
            <!--Browser does not support <video> tag -->
          </video>
        </div>
        <!-- <div class="fade" ></div>-->
        <div class="title">
          <span
            v-on:click="videocontrol(2)"
            class="lightbox_open"
            id="1"
            style="color: #ffffff"
            >ستي هي التي ربتنا
          </span>
        </div>
      </div>
    </div>
    <div class="parentDiv">
      <div class="light">
        <!--<a class="boxclose lightbox_close" id="boxclose_3" ></a>-->
        <video
          class="VisaChipCardVideo"
          id="VisaChipCardVideo3"
          width=""
          v-on:click="videocontrol(3)"
        >
          <!-- <source src="racell 23.97.mp4" type="video/mp4"> -->
          <source
            src="/Images/c1/sectionFour/racell 23.97.mp4"
            type="video/mp4"
          />
          <!--Browser does not support <video> tag -->
        </video>
      </div>

      <!-- <div class="fade" ></div>-->

      <div class="title">
        <span
          v-on:click="videocontrol(3)"
          class="lightbox_open"
          id="1"
          style="color: #ffffff"
          >حسنت لنا علاقتنا الزوجية
        </span>
      </div>
    </div>
    <div class="parentDiv">
      <div class="light">
        <!--<a class="boxclose lightbox_close" id="boxclose_4" ></a>-->
        <video
          class="VisaChipCardVideo"
          id="VisaChipCardVideo4"
          width=""
          v-on:click="videocontrol(4)"
        >
          <!-- <source src="rima 23.97.mp4" type="video/mp4"> -->
          <source
            src="/Images/c1/sectionFour/rima 23.97.mp4"
            type="video/mp4"
          />
          <!--Browser does not support <video> tag -->
        </video>
      </div>
      <!--<div class="fade" ></div>-->
      <div class="title">
        <span
          v-on:click="videocontrol(4)"
          class="lightbox_open"
          id="1"
          style="color: #ffffff"
        >
          بحب يمشي بالبوكسر
        </span>
      </div>
    </div>
    <div class="parentDiv">
      <div class="light">
        <!--<a class="boxclose lightbox_close" id="boxclose_5" ></a>-->
        <video
          class="VisaChipCardVideo"
          id="VisaChipCardVideo5"
          width=""
          v-on:click="videocontrol(5)"
        >
          <!-- <source src="rita 1_23.97.mp4" type="video/mp4"> -->
          <source
            src="/Images/c1/sectionFour/rita 1_23.97.mp4"
            type="video/mp4"
          />
          <!--Browser does not support <video> tag -->
        </video>
      </div>
      <!--<div class="fade" ></div>-->
      <div class="title">
        <span
          v-on:click="videocontrol(5)"
          class="lightbox_open"
          id="1"
          style="color: #ffffff"
          >انا ما رح فني غير الكوكب
        </span>
      </div>
    </div>
    <div class="parentDiv">
      <div class="light">
        <!--<a class="boxclose lightbox_close" id="boxclose_6" ></a>-->
        <video
          class="VisaChipCardVideo"
          id="VisaChipCardVideo6"
          width=""
          v-on:click="videocontrol(6)"
        >
          <!-- <source src="rita 2_23.97.mp4" type="video/mp4"> -->
          <source
            src="/Images/c1/sectionFour/rita 2_23.97.mp4"
            type="video/mp4"
          />
          <!--Browser does not support <video> tag -->
        </video>
      </div>
      <!--<div class="fade" ></div>-->
      <div class="title">
        <span
          v-on:click="videocontrol(6)"
          class="lightbox_open"
          id="1"
          style="color: #ffffff"
          >صار عندها علاقة حنان مع الاولاد
        </span>
      </div>
    </div>
    <div class="parentDiv">
      <div class="light">
        <!--<a class="boxclose lightbox_close" id="boxclose_7" ></a>-->
        <video
          class="VisaChipCardVideo"
          id="VisaChipCardVideo7"
          width=""
          v-on:click="videocontrol(7)"
        >
          <!-- <source src="unknown 1_23.97.mp4" type="video/mp4"> -->
          <source
            src="/Images/c1/sectionFour/unknown 1_23.97.mp4"
            type="video/mp4"
          />
          <!--Browser does not support <video> tag -->
        </video>
      </div>
      <!--<div class="fade" ></div>-->
      <div class="title">
        <span
          v-on:click="videocontrol(7)"
          class="lightbox_open"
          id="1"
          style="color: #ffffff"
          >سودة ومن ثقافة تانية بخفف من حضورها
        </span>
      </div>
    </div>
  </div>
</template>

<style>
@font-face {
  font-family: Nassim;
  font-weight: 400;
  src: url('Regular.woff') format('woff');
}
.parentDiv {
  /*border: 1px solid red;*/
  height: 200px;
  width: auto;
  font-family: Nassim;
  font-size: 2em;
  color: black;
}
.title {
  float: left;
  padding-bottom: 50px;
}
.VisaChipCardVideo {
  height: 150px;
  width: auto;
}
.VisaChipCardVideo:hover {
  opacity: 0.5;
}
.light {
  float: left;
  border: 0px solid #fff;
  background: #fff;
  z-index: 1002;
  overflow: visible;
}
.boxclose:before {
  content: 'x';
}
.fade:hover ~ #boxclose {
  display: none;
}
.test:hover ~ .test2 {
  display: none;
}
@media screen and (max-width: 567px) {
}
.title > span {
  /* text-decoration: none; */
  position: relative;
}
.title > span:after {
  /* text-decoration: none; */
  bottom: 0;
  content: '';
  display: block;
  height: 10px;
  left: 50%;
  width: fit-content;
  position: absolute;
  background: #f1d130;
  transition: width 0.3s ease 0s;
  width: 0;
}
.title > span:hover:after {
  width: 100%;
  left: 0;
}

.title > span:hover {
  cursor: pointer;
}
video {
  background: black;
}
</style>

<script>
export default {
  data() {
    return {
      width: window.innerWidth,
    }
  },
  created() {},
  watch: {
    width: function () {
      console.log('width changed')
    },
  },
  mounted() {
    var divs = document.getElementsByClassName('parentDiv')
    var randomLeft = 0
    if (window.matchMedia('(max-width: 3000px)').matches) {
      // var winWidth = $( window ).width()-250;
      var winWidth = document.getElementById('maintag').style.display.width
      console.log('mobile.111.')
      //var winWidth = 320;
      var winHeight = window.innerHeight
      var winWidth = window.innerWidth

      // i stands for "index". you could also call this banana or haircut. it's a variable
      var topp = 20
      for (var i = 0; i < divs.length; i++) {
        // shortcut! the current div in the list
        var thisDiv = divs[i]

        // get random numbers for each element
        //randomTop = getRandomNumber(0, winHeight);
        console.log('innerWidth===========>', winWidth)
        randomLeft = this.getRandomNumber(0, 60)
        thisDiv.style.top = topp + 'px'
        thisDiv.style.paddingLeft = randomLeft + '%'
        topp = topp + 500
      }
    } else {
      var winWidth = document.getElementById('maintag').style.display.width
      // var winHeight = window.innerHeight;

      // i stands for "index". you could also call this banana or haircut. it's a variable
      var topp = 20
      for (var i = 0; i < divs.length; i++) {
        // shortcut! the current div in the list
        var thisDiv = divs[i]

        // get random numbers for each element
        //randomTop = getRandomNumber(0, winHeight);
        randomLeft = this.getRandomNumber(0, 80)
        if (randomLeft > 450) {
          randomLeft = 450
        }
        // update top and left position
        thisDiv.style.top = topp + 'px'
        thisDiv.style.paddingLeft = randomLeft + '%'
        topp = topp + 200
      }
    }
  },

  methods: {
    videocontrol(videoID) {
      console.log(videoID)
      var allVideo = document.getElementsByClassName('VisaChipCardVideo')
      for (var i = 0; i < allVideo.length; i++) {
        // shortcut! the current div in the list
        var thisVideo = allVideo[i]
        thisVideo.pause()
      }
      var lightBoxVideo = document.getElementById('VisaChipCardVideo' + videoID)
      lightBoxVideo.play()
    },
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min
    },
  },
}
</script>
