xquery version "3.1";

(:~ This library module contains XQSuite tests for the lace2 app.
 :
 : @author Duncan Paterson
 : @version 0.6.16
 :)

module namespace xqs = "http://heml.mta.ca/Lace2/tests";
import module namespace app = "http://heml.mta.ca/Lace2/templates" at "app.xql";
declare namespace test="http://exist-db.org/xquery/xqsuite";

declare variable $xqs:map := map {1: 1};

declare
    %test:name('dummy test')
    %test:arg('n', 'div')
    %test:assertEquals("<p>Dummy templating function.</p>")
    function $xqs:templating-foo($n as xs:string) as node(){
        app:foo(element {$n} {}, $tests:map)
};

declare
    $test:name('make img tag') 
    %test:arg('imageFile', "/db/Lace2Data/images/myname 4athing/myname 4athing_0020.jpg") 
    %test:assertEquals('<img width="500" class="img-responsive" onclick="return page_back()" id="page_image" src="/db/Lace2Data/images/myname 4athing/myname 4athing_0020.jpg" alt="photo"/>')
    function $xqs:mk-img(){
        app:getImageLink($imageFile) {}
};



