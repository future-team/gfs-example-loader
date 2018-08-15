module.exports = function (source, inputSourceMap) {
    
    var rNote = /\/\/demo\sstart(.|[\r\n])*\/\/demo\send/g;
    var mstr = source.match(rNote);
    var rAnnotation = /\/\*[@#](title|description|class){1}([^*]|[\r\n]|(\*+([^*\/]|[\r\n])))*\*+\//g;
    var astr = source.match(rAnnotation);

    var rF = /\/\*@(\w+)\s(.*)\*\//;
  
    var aCache = {};
    var field = null;
    if(astr && astr.length){
        astr.forEach(function(item){
            field = item.match(rF);
            if(field && field.length){
                aCache[field[1]] = JSON.stringify(field[2]).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
            }
        });
    }
    if(mstr && mstr.length>0 ){
        aCache['code'] = JSON.stringify(mstr[0]).replace(/\u2028/g, '\\u2028').replace(/\u2029/g, '\\u2029');
    }

    if(aCache && aCache.title){
        source +=[
            '\nmodule.exports.attribute ={',
            `title:${aCache.title},`,
            `description:${aCache.description},`,
            `code:${aCache.code},`,
            '}'
        ].join('');
    }

    return source;
}