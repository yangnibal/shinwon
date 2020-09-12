function clickContent(cn, crnt){
    var prevId = $('.' + cn).attr('id')
    $('.' + cn).removeClass(cn)
    $(crnt).addClass(cn)
    $('.' + prevId).addClass('hidden')
    $('.' + $(crnt).attr('id')).removeClass('hidden')
}

$(document).ready(function(){
    
    $('.department-list-content').click(function(){
        clickContent('department-selected', this)
    })

    $('.sidebar-content').click(function(){
        clickContent('sidebar-selected', this)
    })

    $('.analysis-progress-content').click(function(){
        $('.progress-before').addClass('hidden')
        var cn = 'progress-selected'
        var prevId = $('.' + cn).attr('id')
        $('.' + cn).removeClass(cn)
        $(this).addClass(cn)
        $('.' + prevId).addClass('hidden')
        $('.' + $(this).attr('id')).removeClass('hidden')
        if(prevId===$(this).attr('id')){
            $('.' + $(this).attr('id')).addClass('hidden')
            $(this).removeClass(cn)
            $('.progress-before').removeClass('hidden')
        }
    })
})