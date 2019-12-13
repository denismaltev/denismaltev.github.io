// Google viewer
$(function($,undefined){
    $.fn.googleViewer = (function(o){   
        var opts = $.extend({formats:"doc",target:'_blank'},o),sel = '',fm=opts.formats.split(',');
        $.map(fm, function(i,x){
            (x == fm.length-1) ? sel += 'a[href$=' + i + ']' : sel += 'a[href$=' + i + '],';
        });      
        this.each(function(){
         $(this).find(sel).attr('href', function(){
             return 'http://docs.google.com/viewer?url=' + this.href;
              }).attr('target',opts.target);
        });
  });		
    $('#resume').googleViewer({'formats':'doc,pdf,docx', 'target':'_blank'});
    $('#resume2').googleViewer({'formats':'doc,pdf,docx', 'target':'_blank'});
    
})(jQuery);