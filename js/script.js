!function(){function hideCarouselSlide(index){$(carouselSlides[index]).css("display","none")}function showCarouselSlide(index){$(carouselSlides[index]).css("display","block")}var oldIndex,carouselSlides=$(".carousel-slides"),carouselSpan=$("#span-repeat"),carouselArrowLeft=$("#arrow-carousel-left"),isCarouselArrowLeftExist=!0,currentCarouselIndex=1;$("#arrow-carousel-right").click(function(){currentCarouselIndex>=carouselSlides.length-1?(carouselSpan.text(carouselSpan.text()+" and repeat"),currentCarouselIndex++):(oldIndex=currentCarouselIndex,currentCarouselIndex++,hideCarouselSlide(oldIndex),showCarouselSlide(currentCarouselIndex)),isCarouselArrowLeftExist||(carouselArrowLeft.removeClass("hide-arrow"),isCarouselArrowLeftExist=!0)}),$("#arrow-carousel-left").click(function(){currentCarouselIndex>=carouselSlides.length?(carouselSpan.text(carouselSpan.text().slice(0,-11)),currentCarouselIndex--):currentCarouselIndex>0&&(oldIndex=currentCarouselIndex,hideCarouselSlide(oldIndex),currentCarouselIndex--,showCarouselSlide(currentCarouselIndex)),0===currentCarouselIndex&&(carouselArrowLeft.addClass("hide-arrow"),isCarouselArrowLeftExist=!1)}),showCarouselSlide(1)}();var isPhone=!1;!function(){/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)?(alert("For some cool pop art stuff, please use your laptop or desktop computer."),isPhone=!0):-1!=navigator.userAgent.indexOf("Safari")&&-1==navigator.userAgent.indexOf("Chrome")?alert("Use Firefox or Chrome for some cool pop art magic."):alert("Allow webcam access for some cool pop art magic.")}(),function(){$("#intro-text")}(),function(){function preventDefault(e){e=e||window.event,e.preventDefault&&e.preventDefault(),e.returnValue=!1}function preventDefaultForScrollKeys(e){return keys[e.keyCode]?(preventDefault(e),!1):void 0}function disableScroll(){window.addEventListener&&window.addEventListener("DOMMouseScroll",preventDefault,!1),window.onwheel=preventDefault,window.onmousewheel=document.onmousewheel=preventDefault,window.ontouchmove=preventDefault,document.onkeydown=preventDefaultForScrollKeys}function enableScroll(){window.removeEventListener&&window.removeEventListener("DOMMouseScroll",preventDefault,!1),window.onmousewheel=document.onmousewheel=null,window.onwheel=null,window.ontouchmove=null,document.onkeydown=null}function displayLightbox(image){return function(){lightboxElem.css("top",$(document).scrollTop()),lightboxElem.addClass("show-lightbox"),lightboxElemContent.css("background-image","url("+image.full_url+")"),disableScroll()}}var lightboxElem=$("#lightbox"),lightboxElemContent=$("#lightbox-content"),modalContainerElems=($("#lightbox-description"),$(".modal-container")),worksData=[{thumbnail_url:"data/images/campbell_thumbnail.jpg",full_url:"data/images/campbell_full.jpg"},{thumbnail_url:"data/images/car_thumbnail.jpg",full_url:"data/images/car_full.jpg"},{thumbnail_url:"data/images/cow_thumbnail.jpg",full_url:"data/images/cow_full.jpg"},{thumbnail_url:"data/images/flower_thumbnail.jpg",full_url:"data/images/flower_full.jpg"},{thumbnail_url:"data/images/mao_thumbnail.jpg",full_url:"data/images/mao_full.jpg"},{thumbnail_url:"data/images/marilyn_thumbnail.jpg",full_url:"data/images/marilyn_full.jpg"},{thumbnail_url:"data/images/1967_thumbnail.jpg",full_url:"data/images/1967_full.jpg"},{thumbnail_url:"data/images/elvis_thumbnail.jpg",full_url:"data/images/elvis_full.jpg"},{thumbnail_url:"data/images/mickey_thumbnail.jpg",full_url:"data/images/mickey_full.jpg"},{thumbnail_url:"data/images/dollar_thumbnail.jpg",full_url:"data/images/dollar_full.jpg"},{thumbnail_url:"data/images/skull_thumbnail.jpg",full_url:"data/images/skull_full.jpg"},{thumbnail_url:"data/images/queen_thumbnail.jpg",full_url:"data/images/queen_full.jpg"}],keys={37:1,38:1,39:1,40:1};worksData.sort(function(a,b){return parseInt(a.year)-parseInt(b.year)}),Array.prototype.forEach.call(modalContainerElems,function(modalContainerElem,index){$(modalContainerElem).css("background-image","url("+worksData[index].thumbnail_url+")"),$(modalContainerElem).click(displayLightbox(worksData[index]))}),$("#lightbox-hide").click(function(){lightboxElem.removeClass("show-lightbox"),enableScroll()}),$("#lightbox-transparent").click(function(){lightboxElem.removeClass("show-lightbox"),enableScroll()})}(),function(){function replaceImageWithWebcam(){Array.prototype.forEach.call(photoVideoContainerElems,function(elem){var $elem=$(elem);$elem.find(".filter-overlay").replaceWith('<video class="filter-overlay column-webcam"></video>')})}var photoVideoContainerElems=$(".input-photo-video");$("#multi-column");isPhone||(navigator.getMedia=navigator.getUserMedia||navigator.webkitGetUserMedia||navigator.mozGetUserMedia,navigator.getMedia({video:!0,audio:!1},function(mediaStream){replaceImageWithWebcam();var videos=document.getElementsByClassName("column-webcam");Array.prototype.forEach.call(videos,function(video){video.src=window.URL.createObjectURL(mediaStream),video.play()}),replaceImageWithWebcam()},function(error){console.log(error)}))}();