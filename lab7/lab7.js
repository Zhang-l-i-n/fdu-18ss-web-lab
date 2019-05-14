$(document).ready(function() {
    $('#thumbBox img').click(function(){
        let replacePic=$(this).attr('src').replace('small','medium');
        let bigPic=$('#imgManipulated img');
        let information=$('#imgManipulated figcaption')
        bigPic.attr('src',replacePic);
        information.html('<em>'+$(this).attr('alt')+'<em><br>'+$(this).attr('title'));
    })

    $('#sliderOpacity').bind('input propertychange',function(e){
        let value1=$('#sliderOpacity').val();
        let value2=$('#sliderSaturation').val();
        let value3=$('#sliderBrightness').val();
        let value4=$('#sliderHue').val();
        let value5=$('#sliderGray').val();
        let value6=$('#sliderBlur').val();
        $('#imgManipulated img').css('-webkit-filter','opacity('+value1+'%) '+
                                                      'saturate('+value2+'%) '+
                                                      'brightness('+value3+'%) '+
                                                      'hue-rotate('+value4+'deg) '+
                                                      'grayscale('+value5+'%) '+
                                                      'blur('+value6+'px) ');
        $('#numOpacity').text(value1);
    })

    $('#sliderSaturation').bind('input propertychange',function(e){
        let value1=$('#sliderOpacity').val();
        let value2=$('#sliderSaturation').val();
        let value3=$('#sliderBrightness').val();
        let value4=$('#sliderHue').val();
        let value5=$('#sliderGray').val();
        let value6=$('#sliderBlur').val();
        $('#imgManipulated img').css('-webkit-filter','opacity('+value1+'%) '+
                                                      'saturate('+value2+'%) '+
                                                      'brightness('+value3+'%) '+
                                                      'hue-rotate('+value4+'deg) '+
                                                      'grayscale('+value5+'%) '+
                                                      'blur('+value6+'px) ');
        $('#numSaturation').text(value2);
    })

    $('#sliderBrightness').bind('input propertychange',function(e){
        let value1=$('#sliderOpacity').val();
        let value2=$('#sliderSaturation').val();
        let value3=$('#sliderBrightness').val();
        let value4=$('#sliderHue').val();
        let value5=$('#sliderGray').val();
        let value6=$('#sliderBlur').val();
        $('#imgManipulated img').css('-webkit-filter','opacity('+value1+'%) '+
                                                      'saturate('+value2+'%) '+
                                                      'brightness('+value3+'%) '+
                                                      'hue-rotate('+value4+'deg) '+
                                                      'grayscale('+value5+'%) '+
                                                      'blur('+value6+'px) ');
        $('#numBrightness').text(value3);
    })

    $('#sliderHue').bind('input propertychange',function(e){
        let value1=$('#sliderOpacity').val();
        let value2=$('#sliderSaturation').val();
        let value3=$('#sliderBrightness').val();
        let value4=$('#sliderHue').val();
        let value5=$('#sliderGray').val();
        let value6=$('#sliderBlur').val();
        $('#imgManipulated img').css('-webkit-filter','opacity('+value1+'%) '+
                                                      'saturate('+value2+'%) '+
                                                      'brightness('+value3+'%) '+
                                                      'hue-rotate('+value4+'deg) '+
                                                      'grayscale('+value5+'%) '+
                                                      'blur('+value6+'px) ');
        $('#numHue').text(value4);
    })

    $('#sliderGray').bind('input propertychange',function(e){
        let value1=$('#sliderOpacity').val();
        let value2=$('#sliderSaturation').val();
        let value3=$('#sliderBrightness').val();
        let value4=$('#sliderHue').val();
        let value5=$('#sliderGray').val();
        let value6=$('#sliderBlur').val();
        $('#imgManipulated img').css('-webkit-filter','opacity('+value1+'%) '+
                                                      'saturate('+value2+'%) '+
                                                      'brightness('+value3+'%) '+
                                                      'hue-rotate('+value4+'deg) '+
                                                      'grayscale('+value5+'%) '+
                                                      'blur('+value6+'px) ');
        $('#numGray').text(value5);
    })

    $('#sliderBlur').bind('input propertychange',function(e){
        let value1=$('#sliderOpacity').val();
        let value2=$('#sliderSaturation').val();
        let value3=$('#sliderBrightness').val();
        let value4=$('#sliderHue').val();
        let value5=$('#sliderGray').val();
        let value6=$('#sliderBlur').val();
        $('#imgManipulated img').css('-webkit-filter','opacity('+value1+'%) '+
                                                      'saturate('+value2+'%) '+
                                                      'brightness('+value3+'%) '+
                                                      'hue-rotate('+value4+'deg) '+
                                                      'grayscale('+value5+'%) '+
                                                      'blur('+value6+'px) ');
        $('#numBlur').text(value6);
    })
});