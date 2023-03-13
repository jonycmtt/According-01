const faqs = document.querySelectorAll('.faq');

faqs.forEach(function(faq){
    faq.addEventListener('click',function(){
        faq.classList.toggle('active')
    })
})