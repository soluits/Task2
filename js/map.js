function popup(mylink, windowname, w, h){
    if (! window.focus)return true;
    var href;
    if (typeof(mylink) == 'string')
       href=mylink;
    else
       href=mylink.href;
    window.open(href, windowname, "width="+w+",height="+h+",scrollbars=yes,toolbar=no" );
    return false;
}
