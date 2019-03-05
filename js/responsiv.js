$(function (){
   nbrFormItem = $('.form_wizard .form_item').length;
   nbrStep = 0;
   $('.form_wizard footer .nxt_step').click(function (){
        if(nbrStep < nbrFormItem-1)
            nbrStep = nbrStep + 1;
        if(nbrStep == nbrFormItem-1){
            $('.form_wizard footer .nxt_step').hide();
            $('.form_wizard footer .submit_btn').show();
        }
        $('.form_wizard header .steps .item').eq(nbrStep).removeClass('steps_disable');
        $('.form_wizard header .steps .item').eq(nbrStep).addClass('steps_activ');
        
        $('.form_wizard header .steps .item').eq(nbrStep - 1).removeClass('steps_activ');
        $('.form_wizard header .steps .item').eq(nbrStep - 1).addClass('steps_disable');
        $('.form_wizard .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_item').eq(nbrStep).fadeIn(700);
        });
   });
   
   $('.pre_step').click(function (){
       if(nbrStep > 0)
            nbrStep = nbrStep - 1;
            $('.form_wizard footer .nxt_step:hidden').show();
            $('.form_wizard footer .submit_btn:visible').hide();
        
        $('.form_wizard header .steps .item').eq(nbrStep).removeClass('steps_disable');
        $('.form_wizard header .steps .item').eq(nbrStep).addClass('steps_activ');
        
        $('.form_wizard header .steps .item').eq(nbrStep + 1).removeClass('steps_activ');
        $('.form_wizard header .steps .item').eq(nbrStep + 1).addClass('steps_disable');
        
        
        $('.form_wizard .form_item:visible').fadeOut(500,function (){
            $('.form_wizard .form_item').eq(nbrStep).fadeIn(700);
        });
   });
});