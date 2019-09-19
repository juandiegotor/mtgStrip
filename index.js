const request = require('request');
const jsdom = require("jsdom");

/*
request({
    uri: "http://www.starcitygames.com/results?name=Khalni+Garden&go.x=0&go.y=0"
}, (err, res, body) => {
    console.log(body);
    if (err) throw err;
    const root = HTMLParser.parse(body);
    q = root.querySelector('.deckdbbody_row'),
    console.log(q.HTMLElement);
})
*/

html = `<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Magic cards at StarCityGames.com!</title>
<meta name="robots" content="index, follow">
<link rel="apple-touch-icon" sizes="57x57" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" sizes="180x180" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon.png">
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if lt IE 8]>
<script src="//ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js"></script>
<![endif]-->
<meta property="og:url" content="http://www.starcitygames.com/results?name=Khalni+Garden&go.x=0&go.y=0" /><meta property="og:type" content="website" /><meta property="og:title" content="Magic cards at StarCityGames.com!" /><meta property="og:description" content="StarCityGames.com® is the world's largest Magic the Gathering store, with an inventory that includes an extensive selection of out-of print sealed product and over 20,000,000 individual cards!" /><meta property="og:image" content="http://static.starcitygames.com/www/images/articles/likeImage2.jpg" /><meta property="og:site_name" content="StarCityGames.com" /><meta property="fb:app_id" content="166463640084673" /><meta property="twitter:card" content="summary" /><meta property="twitter:site" content="@starcitygames" /><meta property="twitter:title" content="Magic cards at StarCityGames.com!" /><meta property="twitter:creator" content="@starcitygames" />
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="//www.starcitygames.com/assets/reset.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/jqueryui.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/jquery-ui-1.12.1/jquery-ui.min.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/style_css.php?date=2018_06_14&ir=http://static.starcitygames.com/www/images/">
<link rel="stylesheet" href="//www.starcitygames.com/assets/jquery.jscrollpane.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/skin.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/chosen-bootstrap/chosen/chosen.min.css">
<link rel="stylesheet" type="text/css" href="//www.starcitygames.com/assets/plugins/fancybox/dist/jquery.fancybox.min.css" media="screen" />
<link rel="stylesheet" type="text/css" href="//www.starcitygames.com/assets/plugins/jquery-qtip/jquery.qtip.min.css" />
<link rel="stylesheet" type="text/css" href="//www.starcitygames.com/js/google_translate.css" />
<link rel="stylesheet" href="//www.starcitygames.com/assets/css/bootstrap.css" />
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/font-awesome/css/font-awesome.min.css" type="text/css" />
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/mana/css/mana.min.css" type="text/css" />


<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-3.0.0.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/plugins/jquery-ui-1.12.1/jquery-ui.min.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/plugins/fancybox/dist/jquery.fancybox.min.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/js/google_analytics.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/js/google_tags.js"></script>
<script type="application/javascript">var googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().disableInitialLoad()});</script><script type="application/javascript" src="//ap.lijit.com/www/headerauction/headersuite.min.js?configId=818"></script>
<script type="text/javascript" src="//www.starcitygames.com/js/google_translate.js"></script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/js/tether.min.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/js/bootstrap.js"></script>
<script type="text/javascript" src="//apis.google.com/js/platform.js"></script>
</head>
<body>

<div id="fb-root"></div>
<script>
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<script>
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s); js.id = id;
    js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {t._e.push(f);};
    return t;
}(document, "script", "twitter-wjs"));
</script>
<style type="text/css">
.beta_warning_top {
        background: #a17202;
        color: #f5f5f5;
        font-size: 13pt;
        font-family:Tahoma, Arial, Helvetica;
        font-weight: bold;
        text-align: center;
        margin-top:0;
        padding: 10px;
        margin-bottom: 1px;
        min-width: 1004px;
}
.beta_warning_top a {
        color: #f5f5f5;
        text-decoration: underline;
}
.beta_warning_top a:hover {
        color: black;
}
.beta_warning_clear {
        clear: both;
}
.premium_top {
        background:#ff0 !important;
        color:#000 !important;
}
.premium_top a {
        color:#00f;
}
</style>
<div class="fixedtop_holder"></div>
<header id="header">

<div id='div-gpt-ad-1368036768350-0' style='width:728px; height:90px; margin-left:auto; margin-right:auto;'>
<script type='text/javascript'>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1368036768350-0'); });
            </script>
</div>
<div style="clear:both;"></div>
<div id="inner_wrapper">
<div class="header_wrapper">
<div id="logo" class="left"><a href="http://www.starcitygames.com/"><img src="http://static.starcitygames.com/www/images/header/headerlogo.png" data-hover="http://static.starcitygames.com/www/images/header/headerlogo-over.png"></a></div>
<div id="main_nav" class="left">
<nav>
<ul>
<li class="spacer"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/">STORE</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/schedule">EVENTS</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/articles/tags/Premium~Select/">ARTICLES</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/decklists/">DECKS</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/buylist/">BUYLIST</a></li>
<li class="spacer"><a href="http://help.starcitygames.com">HELP</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/gamecenter/">GAME CENTER</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/newsletter/">NEWSLETTER</a></li>
</ul>
</nav> </div>
<div id="main_menu_search" class="left">
<div id="main_search">
<form action="/results" method="get" name="search_form">
<input name="name" type="text" placeholder="SEARCH THE WORLD'S LARGEST MAGIC:THE GATHERING STORE!" id="product_searchbox">
<input id="go" name="go" type="image" value="GO" src="/images/go.jpg">
<div id="advsearch" class="right">
<a href="http://www.starcitygames.com/search">Advanced Search</a><br>
<a href="http://www.starcitygames.com/search/deckbuilder" class="normal">Deck Builder</a>
</div>
</form>
</div> </div>
<div id="login" class="left">
<ul>
<li class="account-item account1">
<a href="https://www.starcitygames.com/login">
<div class="account_item_container">
<span class="bold">LOGIN / <br>&nbsp;REGISTER<br /></span>
<input type="hidden" id="mode" class="webdeveloper-unhidden" value="login" name="mode">
</div>
</a>
</li>
<li class="account-item account2">
<a href="https://www.starcitygames.com/cart/">
<div class="account_item_container">
<span class="bold">CART</span> <br /><span id="cart_count2" class="cart-item-count">#</span>
</div>
 </a>
</li>
<li class="account-item account3">
<a href="https://www.starcitygames.com/myaccount/wishlist/">
<div class="account_item_container">
<span class="bold">WISH<br>LIST</span>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
<div id="menu_wrap">
<div class="header_wrapper">
<nav id="product_menu">
<ul id="nav" class="dropdown">
<li id="nav_featured" class="main_menu">
<a href="http://www.starcitygames.com/content/previews"><img src="http://static.starcitygames.com/www/images/setLogo.png" /></a>
</li>
<li id="nav_singles" class="main_menu"><a href="#">Magic Singles</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=english_singles">English</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=english_foils">Foil English</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=non_english_singles">Non-English</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=non_english_foils">Foil Non-English</a></li>
<li><a href="http://www.starcitygames.com/results?name=SCAN+BGS&namematch=BOOL&text=&oracle=1&textmatch=AND">Scanned & Graded Cards</a></li>
<li><a href="http://www.starcitygames.com/catalog/category/5226/5224">Rarities &amp; Misprints</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/144">Wholesale Lots</a></li>
</ul>
</li>
<li id="nav_sealed" class="main_menu"><a href="#">Magic Sealed Product</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5125">Booster Boxes</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5121">Booster Packs</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5129">Box Sets</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5126">Bundles &amp; Fat Packs</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5232">Duel Decks</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5122">Introductory Products</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5231">Multiplayer Products</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5114/5317/5318/5319/5320/5321/5322/5323/5324/5325/5326">Non-English Products</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5123">Tournament/Starter Packs</a></li>
</ul>
</li>
<li id="nav_supplies" class="main_menu"><a href="#">Gaming Supplies</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/content/ultimateguard">Ultimate Guard&reg;</a></li>
<li><a href="http://www.starcitygames.com/content/apparel">Apparel &amp; Accessories</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5088">Binders</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5204">Books</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5299">Collectibles</a></li>
 <li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5089/5091">Deck Boxes &amp; Cases</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5205">Life Counters &amp; Dice</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5090">Playmats</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/content/sleeves">Sleeves</a></li>
</ul>
</li>
<li id="nav_special" class="main_menu"><a href="#">Specialty Items</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/content/creaturecollection/">Creature Collection</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/1">Gift Cards</a></li>
<li><a href="http://www.starcitygames.com/content/lithographs/">Lithographs</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/content/nextlevel/">Next Level Library</a></li>
</ul>
</li>
<li id="nav_digital" class="main_menu"><a href="#">Digital Products</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/content/completecommander/">Complete Commander</a></li>
<li><a href="http://www.starcitygames.com/content/nextlevel/">Next Level Library</a></li>
<li><a href="http://www.starcitygames.com/omg/">OMG: Official Miser's Guide</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/267847">Tha Gatherin'</a></li>
</ul>
</li>
<li id="nav_webuy" class="main_menu"><a href="http://www.starcitygames.com/buylist/">We Buy <img src="http://static.starcitygames.com/www/images/magiclogo.png" width="82" height="23"></a></li>
</ul>
</nav>
</div>
</div>
</header>
<section id="body_content">
<div id="sidebar_background">
<section id="content" class="box_sizing_fix left">
<table style='width:100%'>
<tr>
<td colspan="11">
<div style='background: url("//static.starcitygames.com/www/images/search/scg_search_logo.jpg") no-repeat scroll right 0 #E1E1E1;color: #7C7C7C;font-size: 32px;height: 59px;line-height: 53px;;padding-left: 18px; border-bottom:1px solid #a6a6a6;'>
StarCityGames.com<sup>&reg;</sup>
</div>
</td>
</tr>
<tr>
<td colspan="11">
<div style='float:left;width:48%;height:27px;margin-top:17px;padding-left:15px;'></div>
<div style='float:right;margin-top:17px;margin-right:10px;margin-bottom:8px;'><a href="http://www.starcitygames.com/results?&name=Khalni+Garden&namematch=AND&numpage=25&display=3&switch_display=1"><button class="btn-primary btn-cons btn-lg"> Image View </button></a></div>
</td>
</tr>
</table>
<table cellpadding="5" cellspacing="0" width="100%" style="vertical-align: top;">
<tbody><tr><td>
<script type="text/javascript">
        var product_display_type = "row";
</script>
<script src="//www.starcitygames.com/javascript/jquery.cardpopup_qtip.js" type="text/javascript" charset="utf-8"></script>
<tr><td id="search_table_wrapper">
<table width="100%" cellspacing="0" cellpadding="0" align="center" valign="top" id="search_results_table"> <tbody><tr><td colspan="10">
<tr>
<td class="deckdbheader">Name</td>
<td class="deckdbheader">Category</td>
<td class="deckdbheader">Mana</td>
<td class="deckdbheader">Type</td>
<td class="deckdbheader">P/T</td>
<td class="deckdbheader">Rarity</td>
<td class="deckdbheader">Condition</td>
<td class="deckdbheader">Stock</td>
<td class="deckdbheader">Price</td>
<td class="deckdbheader">&nbsp;</td>
</tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/175661" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/ARC/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Archenemy+2010+Edition">Archenemy (2010 Edition)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody search_results_4">Land</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">C</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td>
<td class="deckdbbody search_results_8">Out of Stock</td>
<td class="deckdbbody search_results_9">$0.29</td>
<td class="deckdbbody search_results_10">
<div>
<button class="btn btn-sm btn-success restock_alert" id="restock_175661" data-product="175661">Restock Alert</button>
</div></td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/514834" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/C13/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Commander+2013+Edition">Commander (2013 Edition)</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody2 search_results_4">Land</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">C</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">59</td><td class="deckdbbody2 search_results_9">$0.29</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_514834">
<a class="add_button" id="add_button_514834" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_514834" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1451255" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/C18/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Commander+2018+Edition">Commander (2018 Edition)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody search_results_4">Land</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">C</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody search_results_8">90</td><td class="deckdbbody search_results_9">$0.25</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1451255">
<a class="add_button" id="add_button_1451255" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1451255" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1259637" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/DDR/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Duel+Decks+Nissa+vs+Ob+Nixilis">Duel Decks: Nissa vs. Ob Nixilis</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody2 search_results_4">Land</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">C</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">24</td><td class="deckdbbody2 search_results_9">$0.25</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1259637">
<a class="add_button" id="add_button_1259637" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1259637" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/402978" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/PC2/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Planechase+2012+Edition">Planechase (2012 Edition)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody search_results_4">Land</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">C</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody search_results_8">28</td><td class="deckdbbody search_results_9">$0.29</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_402978">
<a class="add_button" id="add_button_402978" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_402978" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1291310" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/PCA/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Planechase+Anthology">Planechase Anthology</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody2 search_results_4">Land</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">C</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">2</td><td class="deckdbbody2 search_results_9">$0.29</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1291310">
<a class="add_button" id="add_button_1291310" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1291310" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/171631" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/WWK/en/nonfoil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Worldwake">Worldwake</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody search_results_4">Land</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">C</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody search_results_8">65</td><td class="deckdbbody search_results_9">$0.25</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_171631">
<a class="add_button" id="add_button_171631" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_171631" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/171740" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/WWK/en/foil/KhalniGarden.jpg' alt='Khalni Garden' border='0' align='right' style='max-width:235px'/></div>" tooltip="Khalni Garden">
Khalni Garden</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Worldwake+Foil">Worldwake (Foil)</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"></td><td class="deckdbbody2 search_results_4">Land</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">C</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td>
<td class="deckdbbody2 search_results_8">Out of Stock</td>
<td class="deckdbbody2 search_results_9">$3.99</td>
<td class="deckdbbody2 search_results_10">
<div>
<button class="btn btn-sm btn-success restock_alert" id="restock_171740" data-product="171740">Restock Alert</button>
</div></td></tr></table></td></tr></tbody>
</table>
<table style='width:100%'>
<tbody>
<tr>
<td colspan="11"></td>
</tr>
</tbody>
</table>
</section>
<aside id="sidebar" class="left">
<article id="fp_scglive_ad">
<a href="http://www.starcitygames.com/content/prerelease"><img width="284" height="313" alt="Throne of Eldraine Prerelease Weekend" src="http://static.starcitygames.com/www/images/banners/media/eld/prerelease/eld-prerelease-sidebar.png" border="0"></a><br />
</article>
<style type="text/css">
        #openseries header {
                padding-top: 12px;
                height: 23px;
        box-sizing: content-box;
        -webkit-box-sizing: content box;
        }
        </style>
<article class="sidebox" id="openseries">
<header><a href="http://www.starcitygames.com/content/schedule/">ORGANIZED PLAY</a></header>
<div class="container_decks">
<section>
<nav>
 <ul style="margin: 0px; height:60px;">
<li class="center">
<a href="https://www.starcitygames.com/eventfinder">
<img src="http://static.starcitygames.com/www/images/banners/media/organizedplay/sidebar/eventFinderSidebarButton.png" />
</a>
</li>
</ul>
<ul id="events_nav"><li id="tab1a" class="active"><a href="#thisweekend">THIS WEEK</a></li><li id="tab2a" class=""><a href="#nextweekend">NEXT WEEK</a></li><div id="tab3a"><a href="http://www.starcitygames.com/content/schedule">+</a></div></ul>
</nav>
<div id="thisweekend" class="content">
<ul class="scg_events">
<li class="upper iq_title">THIS Saturday, September 21</li>
<li><a href="https://www.facebook.com/events/2318177428431767/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Columbus, OH</span> - Comic Town </a></li>
<li><a href="https://www.facebook.com/events/511528242955202/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Danbury, CT</span> - Gamer's Gambit </a></li>
<li><a href="https://www.facebook.com/events/2193409950950979/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Eau Claire, WI</span> - d20 Gaming LLC </a></li>
<li><a href="https://www.facebook.com/events/412169652756204/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span><span class="iq_plus">+</span></span> <span class="iq_loc">San Diego, CA</span> - TC's Rockets </a></li>
<li><a href="https://www.facebook.com/events/422628364989125/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Schuylkill Haven, PA</span> - Alchemist's Cove Games & Comics </a></li>
<li><a href="https://www.facebook.com/events/581868638886902/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Toronto, ON</span> - Hairy Tarantula </a></li>
<li class="upper iq_title">THIS Sunday, September 22</li>
<li><a href="https://www.facebook.com/events/635633326912718/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span><span class="iq_plus">+</span></span> <span class="iq_loc">Enfield, CT</span> - Most Excellent Gaming </a></li>
<li><a href="https://www.facebook.com/events/524997704910413/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Findlay, OH</span> - Post Board Gaming </a></li>
<li><a href="https://www.facebook.com/events/318813319027155/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Montgomeryville, PA</span> - Gamers Vault </a></li>
<li><a href="https://www.facebook.com/events/472750450201554/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Williamsport, PA</span> - The White Knight's Game Room </a></li>
</ul>
</div>
<div id="nextweekend" class="content">
<ul class="scg_events">
<li class="upper iq_title">Saturday, September 28</li>
<li class="center" style="  background-color:white;
                            line-height:18px;
                            font-size:14px;
                            font-weight:bolder;
                            margin:5px -5px 0px -5px;
                            padding:5px 5px 0 5px;
                            text-transform:uppercase;
                            border-top: 1px solid #fdb704;
                            border-bottom: 1px solid #cb7500;">
<a href="https://go.starcitygames.com/prerelease/">
<img src="https://static.starcitygames.com/www/images/banners/media/sidebar/prerelease-logos/sidebar-logo_eld.png">
<div class="iq_type states" style="color: #c16603; font-weight: bold;">PRERELEASE WEEKEND</div>
<div class="iq_loc">FIND YOUR STORE!</div>
</a>
</li> <li class="upper iq_title">Sunday, September 29</li>
<li class="center" style="  background-color:white;
                            line-height:18px;
                            font-size:14px;
                            font-weight:bolder;
                            margin:5px -5px 0px -5px;
                            padding:5px 5px 0 5px;
                            text-transform:uppercase;
                            border-top: 1px solid #fdb704;
                            border-bottom: 1px solid #cb7500;">
<a href="https://go.starcitygames.com/prerelease/">
<img src="https://static.starcitygames.com/www/images/banners/media/sidebar/prerelease-logos/sidebar-logo_eld.png">
<div class="iq_type states" style="color: #c16603; font-weight: bold;">PRERELEASE WEEKEND</div>
<div class="iq_loc">FIND YOUR STORE!</div>
</a>
</li>
</ul>
</div>
<hr style="width: 95%">
<ul style="margin:0 0 5px;">
<li class="italics center" style="font-size:12px">
<a href="http://www.starcitygames.com/content/schedule">Complete SCG Tour<sup>&reg;</sup> Schedule</a> | <a href="http://www.starcitygames.com/content/archive">Coverage Archive</a>
</li>
</ul>
<div>
<a href="http://www.starcitygames.com/content/gneventfinder/">
<img style="margin-bottom: -2px" src="http://static.starcitygames.com/www/images/banners/media/organizedplay/sidebar/storeLocatorSidebarButton.png" />
</a>
</div>
</section>
</div>
</article>
<style>

#sb_leaderboard {
        color: black;
}

#sb_leaderboard a, #sb_leaderboard a:hover, #sb_leaderboard a:visited, #sb_leaderboard a:link, #sb_leaderboard a:visited {
        color: black;
        text-decoration: none;
}


#sb_leaderboard img {

}

#sb_leaderboard table {
        width: 100%;
}

#sb_leaderboard tr {
    color: #575757;
    line-height: 23px;
}

.sb_leaderboard_header {
    padding: 8px 12px;
    text-align: center;
}

.sb_leaderboard_header img {
    height: 22px;
    margin-top: -5.8px;
}

.sb_leaderboard_header span {
    color: #005586;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: bold;
    padding-left: 3.6px;
    vertical-align: text-bottom;
}

.sb_leaderboard_subheader {
    background-color: #005586;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 4px 0px 4px 0px;
    text-align: center;
}

.sb_leaderboard_place {
        width: 10%;
        text-align: right;
        padding-right: 5%;
    padding-left: 6.5px;
}

.sb_leaderboard_name {
    text-indent: 10px;
        width: 65%;
}

.sb_leaderboard_points {
        width: 15%;
    padding-left: 5%;
        padding-right: 5%;
        text-align: right;
}

.lb_odd {
        background-color: #EFF6F9;
}

.lb_even {
        background-color: #DCE3E6;
}


</style>
<article class="sidebox" id="sb_leaderboard">
<a href="http://www.starcitygames.com/leaderboard"><div class="sb_leaderboard_header upper"><img src="http://static.starcitygames.com/www/images/banners/media/playersChampionship/scg-tour-logo.svg" /> <span>Leaderboard</span></div>
<div class="sb_leaderboard_subheader upper">Season Two SCG Points</div>
<table>
<tbody>
<tr class="lb_odd">
<td class="sb_leaderboard_place">1</td>
<td class="sb_leaderboard_name">Harlan Firer</td>
<td class="sb_leaderboard_points">83</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">2</td>
<td class="sb_leaderboard_name">Aaron Barich</td>
<td class="sb_leaderboard_points">82</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">3</td>
<td class="sb_leaderboard_name">Dylan Donegan</td>
<td class="sb_leaderboard_points">76</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">4</td>
<td class="sb_leaderboard_name">Jeremy Bertarioni</td>
<td class="sb_leaderboard_points">74</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">5</td>
<td class="sb_leaderboard_name">Aiden Brier</td>
<td class="sb_leaderboard_points">70</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">6</td>
<td class="sb_leaderboard_name">Collins Mullen</td>
<td class="sb_leaderboard_points">66</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">7</td>
<td class="sb_leaderboard_name">Cain Rianhard</td>
<td class="sb_leaderboard_points">65</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">8</td>
<td class="sb_leaderboard_name">Dominic Harvey</td>
<td class="sb_leaderboard_points">63</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">9</td>
<td class="sb_leaderboard_name">Ross Merriam</td>
<td class="sb_leaderboard_points">61</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">10</td>
<td class="sb_leaderboard_name">Pete Ingram</td>
<td class="sb_leaderboard_points">58</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">11</td>
<td class="sb_leaderboard_name">Zach Allen</td>
<td class="sb_leaderboard_points">56</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">12</td>
<td class="sb_leaderboard_name">Joseph Horton</td>
<td class="sb_leaderboard_points">51</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">13</td>
<td class="sb_leaderboard_name">Jonathan Hobbs</td>
<td class="sb_leaderboard_points">49</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">14</td>
<td class="sb_leaderboard_name">Zan Syed</td>
<td class="sb_leaderboard_points">49</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">15</td>
<td class="sb_leaderboard_name">Dylan Hand</td>
<td class="sb_leaderboard_points">48</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">16</td>
<td class="sb_leaderboard_name">Paul Muller</td>
<td class="sb_leaderboard_points">46</td>
</tr>
</tbody>
</table>
</a>
</article><article class="sidebox" id="decklists">
<header><a href="http://www.starcitygames.com/content/decklists/">DECKLISTS</a></header>
<div class="container_decks">
<section>
<nav>
<ul id="decklist_nav">
<li class="active" id="tab1"><a href="#content_decks_standard">STANDARD</a></li><li id="tab2"><a href="#content_decks_modern">MODERN</a></li><li id="tab3"><a href="#content_decks_legacy">LEGACY</a></li>
</ul>
</nav>
<div id="content_decks_standard" class="content deck_size">
<ul>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-01_standard_Dallas_TX_US/1/">9/01 SCG Classic Dallas, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_standard_Spring+Lake_NC_US/1/">8/31 Invi Qualifier Spring Lake, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_standard_Bethlehem_PA_US/1/">8/25 Invi Qualifier Bethlehem, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-24_standard_Pensacola_FL_US/1/">8/24 Invi Qualifier Pensacola, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-24_standard_Roanoke_VA_US/1/">8/24 Invi Qualifier Roanoke, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-08-18_standard_Richmond_VA_US/1/">8/18 SCG Classic Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-17_standard_Lewisville_TX_US/1/">8/17 Invi Qualifier Lewisville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-08-17_standard_Richmond_VA_US/1/">8/17 SCG Team Open Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-28_standard_Ridgeland_MS_US/1/">7/28 Invi Qualifier Ridgeland, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-28_standard_New+Holland_PA_US/1/">7/28 Invi Qualifier New Holland, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-07-28_standard_Columbus_OH_US/1/">7/28 SCG Classic Columbus, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Kennesaw_GA_US/1/">7/27 Invi Qualifier Kennesaw, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Madison_TN_US/1/">7/27 Invi Qualifier Madison, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Queen+Creek_AZ_US/1/">7/27 Invi Qualifier Queen Creek, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Spring+Lake_NC_US/1/">7/27 Invi Qualifier Spring Lake, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Chantilly_VA_US/1/">7/27 Invi Qualifier Chantilly, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-21_standard_Frankenmuth_MI_US/1/">7/21 Invi Qualifier Frankenmuth, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-07-21_standard_Philadelphia_PA_US/1/">7/21 SCG Classic Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-20_standard_Copperas+Cove_TX_US/1/">7/20 Invi Qualifier Copperas Cove, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-20_standard_Rossford_OH_US/1/">7/20 Invi Qualifier Rossford, US</a></li>
</ul>
<div class="decks_footer"><a href="http://www.starcitygames.com/decks/results/end_date/2019-09-18/start_date/2019-08-18/format/1/">View More Standard Decks</a> - <a href="http://www.starcitygames.com/decks/search">Search Decklists</a></div>
</div>
<div id="content_decks_modern" class="content deck_size">
<ul>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-15_modern_Syracuse_NY_US/1/">9/15 SCG Classic Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Cary_NC_US/1/">9/08 Invi Qualifier Cary, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Harrisburg_PA_US/1/">9/08 Invi Qualifier Harrisburg, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Newington_CT_US/1/">9/08 Invi Qualifier Newington, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Brooklyn_NY_US/1/">9/08 Invi Qualifier Brooklyn, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Mt.+Pleasant_MI_US/1/">9/07 Invi Qualifier Mt. Pleasant, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Chantilly_VA_US/1/">9/07 Invi Qualifier Chantilly, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Durham_NC_US/1/">9/07 Invi Qualifier Durham, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Bernardsville_NJ_US/1/">9/07 Invi Qualifier Bernardsville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-01_modern_Levittown_NY_US/1/">9/01 Invi Qualifier Levittown, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-01_modern_Dallas_TX_US/1/">9/01 SCG Classic Dallas, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Northbrook_IL_US/1/">8/31 Invi Qualifier Northbrook, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Montgomeryville_PA_US/1/">8/31 Invi Qualifier Montgomeryville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Falls+Church_VA_US/1/">8/31 Invi Qualifier Falls Church, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Louisville_KY_US/1/">8/31 Invi Qualifier Louisville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-08-31_modern_Dallas_TX_US/1/">8/31 SCG Open Dallas, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Newington_CT_US/1/">8/25 Invi Qualifier Newington, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Kansas+City_MO_US/1/">8/25 Invi Qualifier Kansas City, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Cary_NC_US/1/">8/25 Invi Qualifier Cary, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Williamsport_PA_US/1/">8/25 Invi Qualifier Williamsport, US</a></li>
</ul>
<div class="decks_footer"><a href="http://www.starcitygames.com/decks/results/end_date/2019-09-18/start_date/2019-08-18/format/28/">View More Modern Decks</a> - <a href="http://www.starcitygames.com/decks/search">Search Decklists</a></div>
</div>
<div id="content_decks_legacy" class="content deck_size">
<ul>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-15_legacy_Syracuse_NY_US/1/">9/15 SCG Classic Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-09-14_legacy_Syracuse_NY_US/1/">9/14 SCG Open Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-08-18_legacy_Richmond_VA_US/1/">8/18 SCG Classic Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-08-17_legacy_Richmond_VA_US/1/">8/17 SCG Team Open Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-07-21_legacy_Philadelphia_PA_US/1/">7/21 SCG Classic Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-07-20_legacy_Philadelphia_PA_US/1/">7/20 SCG Team Open Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-06-30_legacy_Pittsburgh_PA_US/1/">6/30 SCG Classic Pittsburgh, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Team_Eternal_Showdown/2019-06-09_legacy_Roanoke_VA_US/1/">6/09 Team Eternal Showdown Roanoke, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Play_4_Power/2019-06-08_legacy_Roanoke_VA_US/1/">6/08 SCG Play 4 Power Roanoke, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Grand_Prix/2019-04-20_legacy_Niagara+Falls_NY_US/1/">4/20 Grand Prix Niagara Falls, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-03-24_legacy_Cincinnati_OH_US/1/">3/24 SCG Classic Cincinnati, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-03-23_legacy_Cincinnati_OH_US/1/">3/23 SCG Team Open Cincinnati, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-03-17_legacy_Philadelphia_PA_US/1/">3/17 SCG Classic Philadelphia, US</a></li>

<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-03-03_legacy_Syracuse_NY_US/1/">3/03 SCG Classic Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-03-02_legacy_Syracuse_NY_US/1/">3/02 SCG Open Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-02-03_legacy_Baltimore_MD_US/1/">2/03 SCG Classic Baltimore, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-02-02_legacy_Syracuse_NY_US/1/">2/02 SCG Open Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-02-02_legacy_Baltimore_MD_US/1/">2/02 SCG Team Open Baltimore, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-01-13_legacy_Worcester_MA_US/1/">1/13 SCG Classic Worcester, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-01-06_legacy_Columbus_OH_US/1/">1/06 SCG Classic Columbus, US</a></li>
</ul>
<div class="decks_footer"><a href="http://www.starcitygames.com/decks/results/end_date/2019-09-18/start_date/2019-08-18/format/3/">View More Legacy Decks</a> - <a href="http://www.starcitygames.com/decks/search">Search Decklists</a></div>
</div>
</section></div>
</article>
<article id="seals">
<section style="margin-top:10px;border:0;">
<div class="left" style="width:282px;">
<table border="0" style="width:100%;" cellpadding="2" cellspacing="0">
<tr>
<td style="width:50%;vertical-align:middle;text-align: center;">
<a href="https://www.positivessl.com" style="font-family: arial; font-size: 10px; color: #212121; text-decoration: none;"><img src="http://static.starcitygames.com/www/images/footer/PositiveSSL_tl_trans.gif" title="Click to Verify - This site chose Comodo Positve SSL for secure e-commerce and confidential communications." alt="" border="0" /></a>
</td>
<td style="width:50%;vertical-align:middle;text-align: center;">
<img src="http://static.starcitygames.com/www/images/footer/wotc_authorized.png">
</td>
</tr>
</table>
</div>
<div class="clear"></div>
</section>
</article>
<article id="payment_options_sidebar" style="width:282px; padding: 5px;">
<section>
<a href="https://help.starcitygames.com/article/50-payment-options" style="text-decoration: none;"><img src="http://static.starcitygames.com/www/images/footer/paymentOptions.jpg" alt="" title="" border="0" width="272" height="80.5" /></a>
</section>
</article>
</aside>
<aside id="sidebar2" class="left" style="width:284px; margin: 0 0 0 10px; font-size: 13px; text-align:center;">
<div id="div-gpt-ad-1469121363337-0" style="height:250px; width:250px; display: inline-block;">
<script type='text/javascript'>
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1469121363337-0'); });
                </script>
</div>
</aside>
<br class="clear">
</div>
</section>
<footer id="main_footer" class="clear">
<aside class="">
<div id="article_bar">
<h1>&nbsp;</h1>
</div>
<div id="sidebar_bar"><div id="sidebar_bar_sub"></div></div>
</aside>
<div id="footer">
<div class="column">
<span class="heading">Connect with us</span><br>
<a href="https://visitor.r20.constantcontact.com/manage/optin?v=0015de0J6wWFJ4j9dVXs5_nw2kG8d7l1n3BiKOqeOAzKyr_Edgg0nqz9zZ_Ov1eesMzNS0KcyInKDcRy2aMCc4kU-naYeTAe-E0V8cXbUGZxZI%3D">
<p style="width:250px;font-size: 13px;margin-bottom:7px;">Subscribe to our Newsletter!</p>
</a>
<div class="social-icons">
<a href="http://www.facebook.com/StarCityGames"><i class="fa fa-facebook-square" aria-hidden="true" style="color:#3B5998!important;"></i></a>
<a href="http://twitter.com/starcitygames"><i class="fa fa-twitter-square" aria-hidden="true" style="color:#1DA1F3!important;"></i></a>
<a href="https://www.youtube.com/user/starcitygamesvideo"><i class="fa fa-youtube-square" aria-hidden="true" style="color:#FF0000!important;"></i></a>
<a href="https://www.instagram.com/starcitygames/"><img src="http://static.starcitygames.com/www//images/banners/media/Social/instagramLogo.png" width="28" style="position: relative; margin-top:-16px;margin-left:7px;margin-right:2px;"></a>
<a href="https://www.twitch.tv/scgtour"><i class="fa fa-twitch" aria-hidden="true" style="color:#6441A4;"></i></a>
</div>
</div>
<div class="column">
<span class="heading">Need help?</span><br>
<a href="http://www.starcitygames.com/contactus">Contact Us</a><br>
<a href="http://help.starcitygames.com">Help Center</a><br>

</div>
<div class="column">
<span class="heading">Organized Play</span><br>
<a href="http://www.starcitygames.com/content/scgtour">SCG Tour</a><br>
<a href="http://www.starcitygames.com/content/schedule">Schedule</a><br>
<a href="http://www.starcitygames.com/leaderboard">Leaderboard</a><br>
<a href="http://www.starcitygames.com/content/coverage">Coverage</a><br>
<a href="http://www.starcitygames.com/content/archive">Coverage Archives</a>
</div>
<div class="column">
<span class="heading">In-Store Programs</span><br>
<a href="http://www.starcitygames.com/content/iq">Invitational Qualifiers</a><br>
<a href="http://www.starcitygames.com/content/gneventfinder/">Game Night</a><br>
<a href="http://www.starcitygames.com/content/prerelease">Prerelease Playmats</a><br>
<a href="http://isp.starcitygames.com/">Organizers</a><br>
</div>
<div class="column">
<span class="heading">StarCityGames.com</span><br>
<a href="http://www.starcitygames.com/content/about">About Us</a><br>
<a href="http://careers.starcitygames.com/">Careers</a><br>
<a href="http://www.starcitygames.com/content/gamecenter/">Game Center</a><br>
<a href="https://www.google.com/maps/place/5728+Williamson+Rd,+Roanoke,+VA+24012/@37.3287328,-79.956158,17z/data=!3m1!4b1!4m5!3m4!1s0x884d0e5072670da1:0xce76b720a15a40c6!8m2!3d37.3287328!4d-79.9539693">
<p><i class="fa fa-map-marker" aria-hidden="true" style="font-size: inherit !important;padding:0px"></i> 5728 Williamson Road NW</p>
<p style="margin-top:-.6em;">Roanoke, VA 24012</p>
</a>
</div>
<div class="legal">
&copy; 2019 Star City Games<sup>&reg;</sup><br>
<a href="https://help.starcitygames.com/article/68-terms-and-conditions">Terms &amp; Conditions</a> | <a href="https://help.starcitygames.com/article/67-privacy-statement">Privacy Statement</a> | <a href="https://help.starcitygames.com/article/58-return-policy">Refund &amp; Return Policy</a>
</div>

<div id='div-gpt-ad-1460054248647-0' style='width:728px; height:90px; margin-left:auto; margin-right:auto;'>
<script type='text/javascript'>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1460054248647-0'); });
            </script>
</div>
<div style="clear:both;"></div>
</div>
</footer>
<script src="//www.starcitygames.com/js/jquery.tabify.js"></script>
<script src="//www.starcitygames.com/js/jquery.marquee.js"></script>
<script src="//www.starcitygames.com/js/jquery.mousewheel.js"></script>
<script src="//www.starcitygames.com/js/jquery.jscrollpane.min.js"></script>
<script src="//www.starcitygames.com/js/jquery.jcarousel.min.js"></script>
<script src="//www.starcitygames.com/assets/plugins/chosen-bootstrap/chosen/chosen.jquery.min.js"></script>
<script src="//www.starcitygames.com/js/jquery.validate.js"></script>
<script src="//www.starcitygames.com/assets/plugins/jquery-qtip/jquery.qtip.min.js"></script>
<script src="//www.starcitygames.com/javascript/jquery.cart_AJAX.js"></script>
<script src="//www.starcitygames.com/js/jquery.flexslider-min.js"></script>
<script src="//www.starcitygames.com/library/scripts/jquery.cycle.all.js"></script>
<script src="//www.starcitygames.com/js/jquery.autocomplete_all_products.js"></script>
<script src="//www.starcitygames.com/javascript/site_definitions.php"></script>
<script src="//www.starcitygames.com/js/site.js"></script>`

html2 = `

<!doctype html>
<html>
<head>
<meta charset="utf-8" />
<title>Magic cards at StarCityGames.com!</title>
<meta name="robots" content="index, follow">
<link rel="apple-touch-icon" sizes="57x57" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-57x57.png">
<link rel="apple-touch-icon" sizes="60x60" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-60x60.png">
<link rel="apple-touch-icon" sizes="72x72" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-72x72.png">
<link rel="apple-touch-icon" sizes="76x76" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-76x76.png">
<link rel="apple-touch-icon" sizes="114x114" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-114x114.png">
<link rel="apple-touch-icon" sizes="120x120" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-120x120.png">
<link rel="apple-touch-icon" sizes="144x144" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-144x144.png">
<link rel="apple-touch-icon" sizes="152x152" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-152x152.png">
<link rel="apple-touch-icon" sizes="180x180" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon-180x180.png">
<link rel="apple-touch-icon" sizes="180x180" href="http://static.starcitygames.com/www//images/apple/apple-touch-icon.png">
<!--[if lt IE 9]>
<script src="//html5shiv.googlecode.com/svn/trunk/html5.js"></script>
<![endif]-->
<!--[if lt IE 8]>
<script src="//ie7-js.googlecode.com/svn/version/2.1(beta4)/IE8.js"></script>
<![endif]-->
<meta property="og:url" content="http://www.starcitygames.com/results?name=Intangible+Virtue&go.x=0&go.y=0" /><meta property="og:type" content="website" /><meta property="og:title" content="Magic cards at StarCityGames.com!" /><meta property="og:description" content="StarCityGames.com® is the world's largest Magic the Gathering store, with an inventory that includes an extensive selection of out-of print sealed product and over 20,000,000 individual cards!" /><meta property="og:image" content="http://static.starcitygames.com/www/images/articles/likeImage2.jpg" /><meta property="og:site_name" content="StarCityGames.com" /><meta property="fb:app_id" content="166463640084673" /><meta property="twitter:card" content="summary" /><meta property="twitter:site" content="@starcitygames" /><meta property="twitter:title" content="Magic cards at StarCityGames.com!" /><meta property="twitter:creator" content="@starcitygames" />
<link href='//fonts.googleapis.com/css?family=Open+Sans:400,400italic,700,700italic' rel='stylesheet' type='text/css'>
<link rel="stylesheet" href="//www.starcitygames.com/assets/reset.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/jqueryui.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/jquery-ui-1.12.1/jquery-ui.min.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/style_css.php?date=2018_06_14&ir=http://static.starcitygames.com/www/images/">
<link rel="stylesheet" href="//www.starcitygames.com/assets/jquery.jscrollpane.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/skin.css">
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/chosen-bootstrap/chosen/chosen.min.css">
<link rel="stylesheet" type="text/css" href="//www.starcitygames.com/assets/plugins/fancybox/dist/jquery.fancybox.min.css" media="screen" />
<link rel="stylesheet" type="text/css" href="//www.starcitygames.com/assets/plugins/jquery-qtip/jquery.qtip.min.css" />
<link rel="stylesheet" type="text/css" href="//www.starcitygames.com/js/google_translate.css" />
<link rel="stylesheet" href="//www.starcitygames.com/assets/css/bootstrap.css" />
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/font-awesome/css/font-awesome.min.css" type="text/css" />
<link rel="stylesheet" href="//www.starcitygames.com/assets/plugins/mana/css/mana.min.css" type="text/css" />


<script src="//ajax.googleapis.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-3.0.0.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/plugins/jquery-ui-1.12.1/jquery-ui.min.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/plugins/fancybox/dist/jquery.fancybox.min.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/js/google_analytics.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/js/google_tags.js"></script>
<script type="application/javascript">var googletag=googletag||{};googletag.cmd=googletag.cmd||[];googletag.cmd.push(function(){googletag.pubads().disableInitialLoad()});</script><script type="application/javascript" src="//ap.lijit.com/www/headerauction/headersuite.min.js?configId=818"></script>
<script type="text/javascript" src="//www.starcitygames.com/js/google_translate.js"></script>
<script type="text/javascript" src="//translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/js/tether.min.js"></script>
<script type="text/javascript" src="//www.starcitygames.com/assets/js/bootstrap.js"></script>
<script type="text/javascript" src="//apis.google.com/js/platform.js"></script>
</head>
<body>

<div id="fb-root"></div>
<script>
(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) return;
    js = d.createElement(s); js.id = id;
    js.src = "https://connect.facebook.net/en_US/sdk.js#xfbml=1&version=v3.0";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));
</script>

<script>
window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s); js.id = id;
    js.src = "//platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);
    t._e = [];
    t.ready = function(f) {t._e.push(f);};
    return t;
}(document, "script", "twitter-wjs"));
</script>
<style type="text/css">
.beta_warning_top {
	background: #a17202;
	color: #f5f5f5;
	font-size: 13pt;
	font-family:Tahoma, Arial, Helvetica;
	font-weight: bold;
	text-align: center;
	margin-top:0;
	padding: 10px;
	margin-bottom: 1px;
	min-width: 1004px;
}
.beta_warning_top a {
	color: #f5f5f5;
	text-decoration: underline;
}
.beta_warning_top a:hover {
	color: black;
}
.beta_warning_clear {
	clear: both;
}
.premium_top {
	background:#ff0 !important;
	color:#000 !important;
}
.premium_top a {
	color:#00f;
}
</style>
<div class="fixedtop_holder"></div>
<header id="header">

<div id='div-gpt-ad-1368036768350-0' style='width:728px; height:90px; margin-left:auto; margin-right:auto;'>
<script type='text/javascript'>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1368036768350-0'); });
            </script>
</div>
<div style="clear:both;"></div>
<div id="inner_wrapper">
<div class="header_wrapper">
<div id="logo" class="left"><a href="http://www.starcitygames.com/"><img src="http://static.starcitygames.com/www/images/header/headerlogo.png" data-hover="http://static.starcitygames.com/www/images/header/headerlogo-over.png"></a></div>
<div id="main_nav" class="left">
<nav>
<ul>
<li class="spacer"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/">STORE</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/schedule">EVENTS</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/articles/tags/Premium~Select/">ARTICLES</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/decklists/">DECKS</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/buylist/">BUYLIST</a></li>
<li class="spacer"><a href="http://help.starcitygames.com">HELP</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/gamecenter/">GAME CENTER</a></li>
<li class="spacer"><a href="http://www.starcitygames.com/content/newsletter/">NEWSLETTER</a></li>
</ul>
</nav> </div>
<div id="main_menu_search" class="left">
<div id="main_search">
<form action="/results" method="get" name="search_form">
<input name="name" type="text" placeholder="SEARCH THE WORLD'S LARGEST MAGIC:THE GATHERING STORE!" id="product_searchbox">
<input id="go" name="go" type="image" value="GO" src="/images/go.jpg">
<div id="advsearch" class="right">
<a href="http://www.starcitygames.com/search">Advanced Search</a><br>
<a href="http://www.starcitygames.com/search/deckbuilder" class="normal">Deck Builder</a>
</div>
</form>
</div> </div>
<div id="login" class="left">
<ul>
<li class="account-item account1">
<a href="https://www.starcitygames.com/login">
<div class="account_item_container">
<span class="bold">LOGIN / <br>&nbsp;REGISTER<br /></span>
<input type="hidden" id="mode" class="webdeveloper-unhidden" value="login" name="mode">
</div>
</a>
</li>
<li class="account-item account2">
<a href="https://www.starcitygames.com/cart/">
<div class="account_item_container">
<span class="bold">CART</span> <br /><span id="cart_count2" class="cart-item-count">#</span>
</div>
</a>
</li>
<li class="account-item account3">
<a href="https://www.starcitygames.com/myaccount/wishlist/">
<div class="account_item_container">
<span class="bold">WISH<br>LIST</span>
</div>
</a>
</li>
</ul>
</div>
</div>
</div>
<div id="menu_wrap">
<div class="header_wrapper">
<nav id="product_menu">
<ul id="nav" class="dropdown">
<li id="nav_featured" class="main_menu">
<a href="http://www.starcitygames.com/content/previews"><img src="http://static.starcitygames.com/www/images/setLogo.png" /></a>
</li>
<li id="nav_singles" class="main_menu"><a href="#">Magic Singles</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=english_singles">English</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=english_foils">Foil English</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=non_english_singles">Non-English</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/?t=non_english_foils">Foil Non-English</a></li>
<li><a href="http://www.starcitygames.com/results?name=SCAN+BGS&namematch=BOOL&text=&oracle=1&textmatch=AND">Scanned & Graded Cards</a></li>
<li><a href="http://www.starcitygames.com/catalog/category/5226/5224">Rarities &amp; Misprints</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/144">Wholesale Lots</a></li>
</ul>
</li>
<li id="nav_sealed" class="main_menu"><a href="#">Magic Sealed Product</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5125">Booster Boxes</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5121">Booster Packs</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5129">Box Sets</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5126">Bundles &amp; Fat Packs</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5232">Duel Decks</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5122">Introductory Products</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5231">Multiplayer Products</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5114/5317/5318/5319/5320/5321/5322/5323/5324/5325/5326">Non-English Products</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5123">Tournament/Starter Packs</a></li>
</ul>
</li>
<li id="nav_supplies" class="main_menu"><a href="#">Gaming Supplies</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/content/ultimateguard">Ultimate Guard&reg;</a></li>
<li><a href="http://www.starcitygames.com/content/apparel">Apparel &amp; Accessories</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5088">Binders</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5204">Books</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5299">Collectibles</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5089/5091">Deck Boxes &amp; Cases</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5205">Life Counters &amp; Dice</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/5090">Playmats</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/content/sleeves">Sleeves</a></li>
</ul>
</li>
<li id="nav_special" class="main_menu"><a href="#">Specialty Items</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/content/creaturecollection/">Creature Collection</a></li>
<li><a href="http://www.starcitygames.com/catalog/magic_the_gathering/category/1">Gift Cards</a></li>
<li><a href="http://www.starcitygames.com/content/lithographs/">Lithographs</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/content/nextlevel/">Next Level Library</a></li>
</ul>
</li>
<li id="nav_digital" class="main_menu"><a href="#">Digital Products</a>
<ul class="show_shadow">
<li><a href="http://www.starcitygames.com/content/completecommander/">Complete Commander</a></li>
<li><a href="http://www.starcitygames.com/content/nextlevel/">Next Level Library</a></li>
<li><a href="http://www.starcitygames.com/omg/">OMG: Official Miser's Guide</a></li>
<li class="lastmenu"><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/267847">Tha Gatherin'</a></li>
</ul>
</li>
<li id="nav_webuy" class="main_menu"><a href="http://www.starcitygames.com/buylist/">We Buy <img src="http://static.starcitygames.com/www/images/magiclogo.png" width="82" height="23"></a></li>
</ul>
</nav>
</div>
</div>
</header>
<section id="body_content">
<div id="sidebar_background">
<section id="content" class="box_sizing_fix left">
<table style='width:100%'>
<tr>
<td colspan="11">
<div style='background: url("//static.starcitygames.com/www/images/search/scg_search_logo.jpg") no-repeat scroll right 0 #E1E1E1;color: #7C7C7C;font-size: 32px;height: 59px;line-height: 53px;;padding-left: 18px; border-bottom:1px solid #a6a6a6;'>
StarCityGames.com<sup>&reg;</sup>
</div>
</td>
</tr>
<tr>
<td colspan="11">
<div style='float:left;width:48%;height:27px;margin-top:17px;padding-left:15px;'></div>
<div style='float:right;margin-top:17px;margin-right:10px;margin-bottom:8px;'><a href="http://www.starcitygames.com/results?&name=Intangible+Virtue&namematch=AND&numpage=25&display=3&switch_display=1"><button class="btn-primary btn-cons btn-lg"> Image View </button></a></div>
</td>
</tr>
</table>
<table cellpadding="5" cellspacing="0" width="100%" style="vertical-align: top;">
<tbody><tr><td>
<script type="text/javascript">
	var product_display_type = "row";
</script>
<script src="//www.starcitygames.com/javascript/jquery.cardpopup_qtip.js" type="text/javascript" charset="utf-8"></script>
<tr><td id="search_table_wrapper">
<table width="100%" cellspacing="0" cellpadding="0" align="center" valign="top" id="search_results_table"> <tbody><tr><td colspan="10">
<tr>
<td class="deckdbheader">Name</td>
<td class="deckdbheader">Category</td>
<td class="deckdbheader">Mana</td>
<td class="deckdbheader">Type</td>
<td class="deckdbheader">P/T</td>
<td class="deckdbheader">Rarity</td>
<td class="deckdbheader">Condition</td>
<td class="deckdbheader">Stock</td>
<td class="deckdbheader">Price</td>
<td class="deckdbheader">&nbsp;</td>
</tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1604986" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/C19/en/nonfoil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Commander+2019+Edition">Commander (2019 Edition)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody search_results_8">88</td><td class="deckdbbody search_results_9">$0.25</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1604986">
<a class="add_button" id="add_button_1604986" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1604986" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/694576" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/CNS/en/nonfoil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Conspiracy+2014+Edition">Conspiracy (2014 Edition)</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td>
<td class="deckdbbody2 search_results_8">Out of Stock</td>
<td class="deckdbbody2 search_results_9">$0.25</td>
<td class="deckdbbody2 search_results_10">
<div>
<button class="btn btn-sm btn-success restock_alert" id="restock_694576" data-product="694576">Restock Alert</button>
</div></td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/694863/695671" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/CNS/en/foil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Conspiracy+2014+Edition+Foil">Conspiracy (2014 Edition) (Foil)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td>
<td class="deckdbbody search_results_8">Out of Stock</td>
<td class="deckdbbody search_results_9">$1.99</td>
<td class="deckdbbody search_results_10">
<div>
<button class="btn btn-sm btn-success restock_alert" id="restock_694863" data-product="694863">Restock Alert</button>
</div></td></tr><tr class="deckdbbody_row">
<td class="deckdbbody_notop search_results_1">&nbsp;</td>
<td class="deckdbbody_notop search_results_2">&nbsp;</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">PL</a></td><td class="deckdbbody search_results_8">1</td><td class="deckdbbody search_results_9">$1.25</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_695671">
<a class="add_button" id="add_button_695671" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_695671" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1238990" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/EMA/en/nonfoil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Eternal+Masters">Eternal Masters</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">3</td><td class="deckdbbody2 search_results_9">$0.25</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1238990">
<a class="add_button" id="add_button_1238990" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1238990" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1239246" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/EMA/en/foil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Eternal+Masters+Foil">Eternal Masters (Foil)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td>
<td class="deckdbbody search_results_8">Out of Stock</td>
<td class="deckdbbody search_results_9">$1.49</td>
<td class="deckdbbody search_results_10">
<div>
<button class="btn btn-sm btn-success restock_alert" id="restock_1239246" data-product="1239246">Restock Alert</button>
</div></td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/287329" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/ISD/en/nonfoil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Innistrad">Innistrad</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">100</td><td class="deckdbbody2 search_results_9">$0.29</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_287329">
<a class="add_button" id="add_button_287329" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_287329" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/287549/302256" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/ISD/en/foil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Innistrad+Foil">Innistrad (Foil)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td>
<td class="deckdbbody search_results_8">Out of Stock</td>
<td class="deckdbbody search_results_9">$1.99</td>
<td class="deckdbbody search_results_10">
<div>
<button class="btn btn-sm btn-success restock_alert" id="restock_287549" data-product="287549">Restock Alert</button>
</div></td></tr><tr class="deckdbbody_row">
<td class="deckdbbody_notop search_results_1">&nbsp;</td>
<td class="deckdbbody_notop search_results_2">&nbsp;</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">PL</a></td><td class="deckdbbody search_results_8">1</td><td class="deckdbbody search_results_9">$1.25</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_302256">
<a class="add_button" id="add_button_302256" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_302256" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/567495" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/MDN/en/nonfoil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Modern+Event+Deck">Modern Event Deck</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">91</td><td class="deckdbbody2 search_results_9">$0.29</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_567495">
<a class="add_button" id="add_button_567495" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_567495" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1306309" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/MM3/en/nonfoil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Modern+Masters+2017+Edition">Modern Masters (2017 Edition)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody search_results_8">75</td><td class="deckdbbody search_results_9">$0.25</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1306309">
<a class="add_button" id="add_button_1306309" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1306309" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1307297/1307295" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/MM3/en/foil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/Modern+Masters+2017+Edition+Foil">Modern Masters (2017 Edition) (Foil)</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">20</td><td class="deckdbbody2 search_results_9">$0.99</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1307297">
<a class="add_button" id="add_button_1307297" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1307297" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row">
<td class="deckdbbody2_notop search_results_1">&nbsp;</td>
<td class="deckdbbody2_notop search_results_2">&nbsp;</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">PL</a></td><td class="deckdbbody2 search_results_8">3</td><td class="deckdbbody2 search_results_9">$0.49</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1307295">
<a class="add_button" id="add_button_1307295" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1307295" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody_row"><td class="deckdbbody search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/1240337" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/EMA/ja/foil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue (Eternal Masters)</a></b></td><td class="deckdbbody search_results_2">
<a href="http://www.starcitygames.com/catalog/category/NonEnglish+Singles+Japanese+Foil">Non-English Singles: Japanese (Foil)</a>
</td><td class="deckdbbody search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody search_results_4">Enchantment</td><td class="deckdbbody search_results_5"></td>
<td class="deckdbbody search_results_6">U</td>
<td class="deckdbbody search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody search_results_8">1</td><td class="deckdbbody search_results_9">$1.99</td><td class="deckdbbody search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_1240337">
<a class="add_button" id="add_button_1240337" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_1240337" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row"><td class="deckdbbody2 search_results_1"><b><a href="http://www.starcitygames.com/catalog/magic_the_gathering/product/292826/348953" class="card_popup" rel="<div style='text-align: center;'><img src='http://static.starcitygames.com/sales/cardscans/MTG/ISD/ja/foil/IntangibleVirtue.jpg' alt='Intangible Virtue' border='0' align='right' style='max-width:235px'/></div>" tooltip="Intangible Virtue">
Intangible Virtue (Innistrad)</a></b></td><td class="deckdbbody2 search_results_2">
<a href="http://www.starcitygames.com/catalog/category/NonEnglish+Singles+Japanese+Foil">Non-English Singles: Japanese (Foil)</a>
</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">NM/M</a></td><td class="deckdbbody2 search_results_8">1</td><td class="deckdbbody2 search_results_9">$2.99</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_292826">
<a class="add_button" id="add_button_292826" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_292826" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr><tr class="deckdbbody2_row">
<td class="deckdbbody2_notop search_results_1">&nbsp;</td>
<td class="deckdbbody2_notop search_results_2">&nbsp;</td><td class="deckdbbody2 search_results_3" style="font-size:14px;" nowrap="nowrap"><i class="ms ms-1 ms-cost"></i><i class="ms ms-w ms-cost"></i></td><td class="deckdbbody2 search_results_4">Enchantment</td><td class="deckdbbody2 search_results_5"></td>
<td class="deckdbbody2 search_results_6">U</td>
<td class="deckdbbody2 search_results_7"><a href="http://www.starcitygames.com/content/cardconditions">PL</a></td><td class="deckdbbody2 search_results_8">3</td><td class="deckdbbody2 search_results_9">$1.99</td><td class="deckdbbody2 search_results_10">
<div>
<input type="text" name="qty" size="2" maxlength="4" value="0" class="cart_qty" id="qty_348953">
<a class="add_button" id="add_button_348953" href="javascript:;">
<i class="fa fa-plus-square"></i>
</a>
<input type="submit" value=" Buy " id="buy_348953" class="btn btn-primary btn-sm search_buy_button">
</div>
</td></tr></table></td></tr></tbody>
</table>
<table style='width:100%'>
<tbody>
<tr>
<td colspan="11"></td>
</tr>
</tbody>
</table>
</section>
<aside id="sidebar" class="left">
<article id="fp_scglive_ad">
<a href="http://www.starcitygames.com/content/prerelease"><img width="284" height="313" alt="Throne of Eldraine Prerelease Weekend" src="http://static.starcitygames.com/www/images/banners/media/eld/prerelease/eld-prerelease-sidebar.png" border="0"></a><br />
</article>
<style type="text/css">
	#openseries header {
		padding-top: 12px;
		height: 23px;
        box-sizing: content-box;
        -webkit-box-sizing: content box;
	}
	</style>
<article class="sidebox" id="openseries">
<header><a href="http://www.starcitygames.com/content/schedule/">ORGANIZED PLAY</a></header>
<div class="container_decks">
<section>
<nav>
<ul style="margin: 0px; height:60px;">
<li class="center">
<a href="https://www.starcitygames.com/eventfinder">
<img src="http://static.starcitygames.com/www/images/banners/media/organizedplay/sidebar/eventFinderSidebarButton.png" />
</a>
</li>
</ul>
<ul id="events_nav"><li id="tab1a" class="active"><a href="#thisweekend">THIS WEEK</a></li><li id="tab2a" class=""><a href="#nextweekend">NEXT WEEK</a></li><div id="tab3a"><a href="http://www.starcitygames.com/content/schedule">+</a></div></ul>
</nav>
<div id="thisweekend" class="content">
<ul class="scg_events">
<li class="upper iq_title">THIS Saturday, September 21</li>
<li><a href="https://www.facebook.com/events/2318177428431767/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Columbus, OH</span> - Comic Town </a></li>
<li><a href="https://www.facebook.com/events/511528242955202/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Danbury, CT</span> - Gamer's Gambit </a></li>
<li><a href="https://www.facebook.com/events/2193409950950979/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Eau Claire, WI</span> - d20 Gaming LLC </a></li>
<li><a href="https://www.facebook.com/events/412169652756204/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span><span class="iq_plus">+</span></span> <span class="iq_loc">San Diego, CA</span> - TC's Rockets </a></li>
<li><a href="https://www.facebook.com/events/422628364989125/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Schuylkill Haven, PA</span> - Alchemist's Cove Games & Comics </a></li>
<li><a href="https://www.facebook.com/events/581868638886902/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Toronto, ON</span> - Hairy Tarantula </a></li>
<li class="upper iq_title">THIS Sunday, September 22</li>
<li><a href="https://www.facebook.com/events/635633326912718/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span><span class="iq_plus">+</span></span> <span class="iq_loc">Enfield, CT</span> - Most Excellent Gaming </a></li>
<li><a href="https://www.facebook.com/events/524997704910413/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Findlay, OH</span> - Post Board Gaming </a></li>
<li><a href="https://www.facebook.com/events/318813319027155/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Montgomeryville, PA</span> - Gamers Vault </a></li>
<li><a href="https://www.facebook.com/events/472750450201554/">
<span><img style="margin-top:-.3em;" src="http://static.starcitygames.com/www/images/events/t_iq.png"><span class="iq_iq"> IQ</span></span> <span class="iq_loc">Williamsport, PA</span> - The White Knight's Game Room </a></li>
</ul>
</div>
<div id="nextweekend" class="content">
<ul class="scg_events">
<li class="upper iq_title">Saturday, September 28</li>
<li class="center" style="  background-color:white;
                            line-height:18px;
                            font-size:14px;
                            font-weight:bolder;
                            margin:5px -5px 0px -5px;
                            padding:5px 5px 0 5px;
                            text-transform:uppercase;
                            border-top: 1px solid #fdb704;
                            border-bottom: 1px solid #cb7500;">
<a href="https://go.starcitygames.com/prerelease/">
<img src="https://static.starcitygames.com/www/images/banners/media/sidebar/prerelease-logos/sidebar-logo_eld.png">
<div class="iq_type states" style="color: #c16603; font-weight: bold;">PRERELEASE WEEKEND</div>
<div class="iq_loc">FIND YOUR STORE!</div>
</a>
</li> <li class="upper iq_title">Sunday, September 29</li>
<li class="center" style="  background-color:white;
                            line-height:18px;
                            font-size:14px;
                            font-weight:bolder;
                            margin:5px -5px 0px -5px;
                            padding:5px 5px 0 5px;
                            text-transform:uppercase;
                            border-top: 1px solid #fdb704;
                            border-bottom: 1px solid #cb7500;">
<a href="https://go.starcitygames.com/prerelease/">
<img src="https://static.starcitygames.com/www/images/banners/media/sidebar/prerelease-logos/sidebar-logo_eld.png">
<div class="iq_type states" style="color: #c16603; font-weight: bold;">PRERELEASE WEEKEND</div>
<div class="iq_loc">FIND YOUR STORE!</div>
</a>
</li>
</ul>
</div>
<hr style="width: 95%">
<ul style="margin:0 0 5px;">
<li class="italics center" style="font-size:12px">
<a href="http://www.starcitygames.com/content/schedule">Complete SCG Tour<sup>&reg;</sup> Schedule</a> | <a href="http://www.starcitygames.com/content/archive">Coverage Archive</a>
</li>
</ul>
<div>
<a href="http://www.starcitygames.com/content/gneventfinder/">
<img style="margin-bottom: -2px" src="http://static.starcitygames.com/www/images/banners/media/organizedplay/sidebar/storeLocatorSidebarButton.png" />
</a>
</div>
</section>
</div>
</article>
<style>

#sb_leaderboard {
	color: black;
}

#sb_leaderboard a, #sb_leaderboard a:hover, #sb_leaderboard a:visited, #sb_leaderboard a:link, #sb_leaderboard a:visited {
	color: black;
	text-decoration: none;
}


#sb_leaderboard img {

}

#sb_leaderboard table {
	width: 100%;
}

#sb_leaderboard tr {
    color: #575757;
    line-height: 23px;
}

.sb_leaderboard_header {
    padding: 8px 12px;
    text-align: center;
}

.sb_leaderboard_header img {
    height: 22px;
    margin-top: -5.8px;
}

.sb_leaderboard_header span {
    color: #005586;
    font-family: "Open Sans";
    font-size: 18px;
    font-weight: bold;
    padding-left: 3.6px;
    vertical-align: text-bottom;
}

.sb_leaderboard_subheader {
    background-color: #005586;
    color: white;
    font-size: 15px;
    font-weight: bold;
    padding: 4px 0px 4px 0px;
    text-align: center;
}

.sb_leaderboard_place {
	width: 10%;
	text-align: right;
	padding-right: 5%;
    padding-left: 6.5px;
}

.sb_leaderboard_name {
    text-indent: 10px;
	width: 65%;
}

.sb_leaderboard_points {
	width: 15%;
    padding-left: 5%;
	padding-right: 5%;
	text-align: right;
}

.lb_odd {
	background-color: #EFF6F9;
}

.lb_even {
	background-color: #DCE3E6;
}


</style>
<article class="sidebox" id="sb_leaderboard">
<a href="http://www.starcitygames.com/leaderboard"><div class="sb_leaderboard_header upper"><img src="http://static.starcitygames.com/www/images/banners/media/playersChampionship/scg-tour-logo.svg" /> <span>Leaderboard</span></div>
<div class="sb_leaderboard_subheader upper">Season Two SCG Points</div>
<table>
<tbody>
<tr class="lb_odd">
<td class="sb_leaderboard_place">1</td>
<td class="sb_leaderboard_name">Harlan Firer</td>
<td class="sb_leaderboard_points">83</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">2</td>
<td class="sb_leaderboard_name">Aaron Barich</td>
<td class="sb_leaderboard_points">82</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">3</td>
<td class="sb_leaderboard_name">Dylan Donegan</td>
<td class="sb_leaderboard_points">76</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">4</td>
<td class="sb_leaderboard_name">Jeremy Bertarioni</td>
<td class="sb_leaderboard_points">74</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">5</td>
<td class="sb_leaderboard_name">Aiden Brier</td>
<td class="sb_leaderboard_points">70</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">6</td>
<td class="sb_leaderboard_name">Collins Mullen</td>
<td class="sb_leaderboard_points">66</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">7</td>
<td class="sb_leaderboard_name">Cain Rianhard</td>
<td class="sb_leaderboard_points">65</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">8</td>
<td class="sb_leaderboard_name">Dominic Harvey</td>
<td class="sb_leaderboard_points">63</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">9</td>
<td class="sb_leaderboard_name">Ross Merriam</td>
<td class="sb_leaderboard_points">61</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">10</td>
<td class="sb_leaderboard_name">Pete Ingram</td>
<td class="sb_leaderboard_points">58</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">11</td>
<td class="sb_leaderboard_name">Zach Allen</td>
<td class="sb_leaderboard_points">56</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">12</td>
<td class="sb_leaderboard_name">Joseph Horton</td>
<td class="sb_leaderboard_points">51</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">13</td>
<td class="sb_leaderboard_name">Jonathan Hobbs</td>
<td class="sb_leaderboard_points">49</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">14</td>
<td class="sb_leaderboard_name">Zan Syed</td>
<td class="sb_leaderboard_points">49</td>
</tr>
<tr class="lb_odd">
<td class="sb_leaderboard_place">15</td>
<td class="sb_leaderboard_name">Dylan Hand</td>
<td class="sb_leaderboard_points">48</td>
</tr>
<tr class="lb_even">
<td class="sb_leaderboard_place">16</td>
<td class="sb_leaderboard_name">Paul Muller</td>
<td class="sb_leaderboard_points">46</td>
</tr>
</tbody>
</table>
</a>
</article><article class="sidebox" id="decklists">
<header><a href="http://www.starcitygames.com/content/decklists/">DECKLISTS</a></header>
<div class="container_decks">
<section>
<nav>
<ul id="decklist_nav">
<li class="active" id="tab1"><a href="#content_decks_standard">STANDARD</a></li><li id="tab2"><a href="#content_decks_modern">MODERN</a></li><li id="tab3"><a href="#content_decks_legacy">LEGACY</a></li>
</ul>
</nav>
<div id="content_decks_standard" class="content deck_size">
<ul>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-01_standard_Dallas_TX_US/1/">9/01 SCG Classic Dallas, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_standard_Spring+Lake_NC_US/1/">8/31 Invi Qualifier Spring Lake, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_standard_Bethlehem_PA_US/1/">8/25 Invi Qualifier Bethlehem, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-24_standard_Pensacola_FL_US/1/">8/24 Invi Qualifier Pensacola, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-24_standard_Roanoke_VA_US/1/">8/24 Invi Qualifier Roanoke, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-08-18_standard_Richmond_VA_US/1/">8/18 SCG Classic Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-17_standard_Lewisville_TX_US/1/">8/17 Invi Qualifier Lewisville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-08-17_standard_Richmond_VA_US/1/">8/17 SCG Team Open Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-28_standard_Ridgeland_MS_US/1/">7/28 Invi Qualifier Ridgeland, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-28_standard_New+Holland_PA_US/1/">7/28 Invi Qualifier New Holland, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-07-28_standard_Columbus_OH_US/1/">7/28 SCG Classic Columbus, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Kennesaw_GA_US/1/">7/27 Invi Qualifier Kennesaw, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Madison_TN_US/1/">7/27 Invi Qualifier Madison, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Queen+Creek_AZ_US/1/">7/27 Invi Qualifier Queen Creek, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Spring+Lake_NC_US/1/">7/27 Invi Qualifier Spring Lake, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-27_standard_Chantilly_VA_US/1/">7/27 Invi Qualifier Chantilly, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-21_standard_Frankenmuth_MI_US/1/">7/21 Invi Qualifier Frankenmuth, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-07-21_standard_Philadelphia_PA_US/1/">7/21 SCG Classic Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-20_standard_Copperas+Cove_TX_US/1/">7/20 Invi Qualifier Copperas Cove, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-07-20_standard_Rossford_OH_US/1/">7/20 Invi Qualifier Rossford, US</a></li>
</ul>
<div class="decks_footer"><a href="http://www.starcitygames.com/decks/results/end_date/2019-09-18/start_date/2019-08-18/format/1/">View More Standard Decks</a> - <a href="http://www.starcitygames.com/decks/search">Search Decklists</a></div>
</div>
<div id="content_decks_modern" class="content deck_size">
<ul>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-15_modern_Syracuse_NY_US/1/">9/15 SCG Classic Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Cary_NC_US/1/">9/08 Invi Qualifier Cary, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Harrisburg_PA_US/1/">9/08 Invi Qualifier Harrisburg, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Newington_CT_US/1/">9/08 Invi Qualifier Newington, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-08_modern_Brooklyn_NY_US/1/">9/08 Invi Qualifier Brooklyn, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Mt.+Pleasant_MI_US/1/">9/07 Invi Qualifier Mt. Pleasant, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Chantilly_VA_US/1/">9/07 Invi Qualifier Chantilly, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Durham_NC_US/1/">9/07 Invi Qualifier Durham, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-07_modern_Bernardsville_NJ_US/1/">9/07 Invi Qualifier Bernardsville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-09-01_modern_Levittown_NY_US/1/">9/01 Invi Qualifier Levittown, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-01_modern_Dallas_TX_US/1/">9/01 SCG Classic Dallas, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Northbrook_IL_US/1/">8/31 Invi Qualifier Northbrook, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Montgomeryville_PA_US/1/">8/31 Invi Qualifier Montgomeryville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Falls+Church_VA_US/1/">8/31 Invi Qualifier Falls Church, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-31_modern_Louisville_KY_US/1/">8/31 Invi Qualifier Louisville, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-08-31_modern_Dallas_TX_US/1/">8/31 SCG Open Dallas, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Newington_CT_US/1/">8/25 Invi Qualifier Newington, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Kansas+City_MO_US/1/">8/25 Invi Qualifier Kansas City, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Cary_NC_US/1/">8/25 Invi Qualifier Cary, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Invitational_Qualifier/2019-08-25_modern_Williamsport_PA_US/1/">8/25 Invi Qualifier Williamsport, US</a></li>
</ul>
<div class="decks_footer"><a href="http://www.starcitygames.com/decks/results/end_date/2019-09-18/start_date/2019-08-18/format/28/">View More Modern Decks</a> - <a href="http://www.starcitygames.com/decks/search">Search Decklists</a></div>
</div>
<div id="content_decks_legacy" class="content deck_size">
<ul>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-09-15_legacy_Syracuse_NY_US/1/">9/15 SCG Classic Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-09-14_legacy_Syracuse_NY_US/1/">9/14 SCG Open Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-08-18_legacy_Richmond_VA_US/1/">8/18 SCG Classic Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-08-17_legacy_Richmond_VA_US/1/">8/17 SCG Team Open Richmond, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-07-21_legacy_Philadelphia_PA_US/1/">7/21 SCG Classic Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-07-20_legacy_Philadelphia_PA_US/1/">7/20 SCG Team Open Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-06-30_legacy_Pittsburgh_PA_US/1/">6/30 SCG Classic Pittsburgh, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Team_Eternal_Showdown/2019-06-09_legacy_Roanoke_VA_US/1/">6/09 Team Eternal Showdown Roanoke, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Play_4_Power/2019-06-08_legacy_Roanoke_VA_US/1/">6/08 SCG Play 4 Power Roanoke, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Grand_Prix/2019-04-20_legacy_Niagara+Falls_NY_US/1/">4/20 Grand Prix Niagara Falls, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-03-24_legacy_Cincinnati_OH_US/1/">3/24 SCG Classic Cincinnati, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-03-23_legacy_Cincinnati_OH_US/1/">3/23 SCG Team Open Cincinnati, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-03-17_legacy_Philadelphia_PA_US/1/">3/17 SCG Classic Philadelphia, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-03-03_legacy_Syracuse_NY_US/1/">3/03 SCG Classic Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-03-02_legacy_Syracuse_NY_US/1/">3/02 SCG Open Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-02-03_legacy_Baltimore_MD_US/1/">2/03 SCG Classic Baltimore, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Open/2019-02-02_legacy_Syracuse_NY_US/1/">2/02 SCG Open Syracuse, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Team_Open/2019-02-02_legacy_Baltimore_MD_US/1/">2/02 SCG Team Open Baltimore, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-01-13_legacy_Worcester_MA_US/1/">1/13 SCG Classic Worcester, US</a></li>
<li><a href="http://www.starcitygames.com/decks/Star_City_Games_Classic/2019-01-06_legacy_Columbus_OH_US/1/">1/06 SCG Classic Columbus, US</a></li>
</ul>
<div class="decks_footer"><a href="http://www.starcitygames.com/decks/results/end_date/2019-09-18/start_date/2019-08-18/format/3/">View More Legacy Decks</a> - <a href="http://www.starcitygames.com/decks/search">Search Decklists</a></div>
</div>
</section></div>
</article>
<article id="seals">
<section style="margin-top:10px;border:0;">
<div class="left" style="width:282px;">
<table border="0" style="width:100%;" cellpadding="2" cellspacing="0">
<tr>
<td style="width:50%;vertical-align:middle;text-align: center;">
<a href="https://www.positivessl.com" style="font-family: arial; font-size: 10px; color: #212121; text-decoration: none;"><img src="http://static.starcitygames.com/www/images/footer/PositiveSSL_tl_trans.gif" title="Click to Verify - This site chose Comodo Positve SSL for secure e-commerce and confidential communications." alt="" border="0" /></a>
</td>
<td style="width:50%;vertical-align:middle;text-align: center;">
<img src="http://static.starcitygames.com/www/images/footer/wotc_authorized.png">
</td>
</tr>
</table>
</div>
<div class="clear"></div>
</section>
</article>
<article id="payment_options_sidebar" style="width:282px; padding: 5px;">
<section>
<a href="https://help.starcitygames.com/article/50-payment-options" style="text-decoration: none;"><img src="http://static.starcitygames.com/www/images/footer/paymentOptions.jpg" alt="" title="" border="0" width="272" height="80.5" /></a>
</section>
</article>
</aside>
<aside id="sidebar2" class="left" style="width:284px; margin: 0 0 0 10px; font-size: 13px; text-align:center;">
<div id="div-gpt-ad-1469121363337-0" style="height:250px; width:250px; display: inline-block;">
<script type='text/javascript'>
                googletag.cmd.push(function() { googletag.display('div-gpt-ad-1469121363337-0'); });
                </script>
</div>
</aside>
<br class="clear">
</div>
</section>
<footer id="main_footer" class="clear">
<aside class="">
<div id="article_bar">
<h1>&nbsp;</h1>
</div>
<div id="sidebar_bar"><div id="sidebar_bar_sub"></div></div>
</aside>
<div id="footer">
<div class="column">
<span class="heading">Connect with us</span><br>
<a href="https://visitor.r20.constantcontact.com/manage/optin?v=0015de0J6wWFJ4j9dVXs5_nw2kG8d7l1n3BiKOqeOAzKyr_Edgg0nqz9zZ_Ov1eesMzNS0KcyInKDcRy2aMCc4kU-naYeTAe-E0V8cXbUGZxZI%3D">
<p style="width:250px;font-size: 13px;margin-bottom:7px;">Subscribe to our Newsletter!</p>
</a>
<div class="social-icons">
<a href="http://www.facebook.com/StarCityGames"><i class="fa fa-facebook-square" aria-hidden="true" style="color:#3B5998!important;"></i></a>
<a href="http://twitter.com/starcitygames"><i class="fa fa-twitter-square" aria-hidden="true" style="color:#1DA1F3!important;"></i></a>
<a href="https://www.youtube.com/user/starcitygamesvideo"><i class="fa fa-youtube-square" aria-hidden="true" style="color:#FF0000!important;"></i></a>
<a href="https://www.instagram.com/starcitygames/"><img src="http://static.starcitygames.com/www//images/banners/media/Social/instagramLogo.png" width="28" style="position: relative; margin-top:-16px;margin-left:7px;margin-right:2px;"></a>
<a href="https://www.twitch.tv/scgtour"><i class="fa fa-twitch" aria-hidden="true" style="color:#6441A4;"></i></a>
</div>
</div>
<div class="column">
<span class="heading">Need help?</span><br>
<a href="http://www.starcitygames.com/contactus">Contact Us</a><br>
<a href="http://help.starcitygames.com">Help Center</a><br>

</div>
<div class="column">
<span class="heading">Organized Play</span><br>
<a href="http://www.starcitygames.com/content/scgtour">SCG Tour</a><br>
<a href="http://www.starcitygames.com/content/schedule">Schedule</a><br>
<a href="http://www.starcitygames.com/leaderboard">Leaderboard</a><br>
<a href="http://www.starcitygames.com/content/coverage">Coverage</a><br>
<a href="http://www.starcitygames.com/content/archive">Coverage Archives</a>
</div>
<div class="column">
<span class="heading">In-Store Programs</span><br>
<a href="http://www.starcitygames.com/content/iq">Invitational Qualifiers</a><br>
<a href="http://www.starcitygames.com/content/gneventfinder/">Game Night</a><br>
<a href="http://www.starcitygames.com/content/prerelease">Prerelease Playmats</a><br>
<a href="http://isp.starcitygames.com/">Organizers</a><br>
</div>
<div class="column">
<span class="heading">StarCityGames.com</span><br>
<a href="http://www.starcitygames.com/content/about">About Us</a><br>
<a href="http://careers.starcitygames.com/">Careers</a><br>
<a href="http://www.starcitygames.com/content/gamecenter/">Game Center</a><br>
<a href="https://www.google.com/maps/place/5728+Williamson+Rd,+Roanoke,+VA+24012/@37.3287328,-79.956158,17z/data=!3m1!4b1!4m5!3m4!1s0x884d0e5072670da1:0xce76b720a15a40c6!8m2!3d37.3287328!4d-79.9539693">
<p><i class="fa fa-map-marker" aria-hidden="true" style="font-size: inherit !important;padding:0px"></i> 5728 Williamson Road NW</p>
<p style="margin-top:-.6em;">Roanoke, VA 24012</p>
</a>
</div>
<div class="legal">
&copy; 2019 Star City Games<sup>&reg;</sup><br>
<a href="https://help.starcitygames.com/article/68-terms-and-conditions">Terms &amp; Conditions</a> | <a href="https://help.starcitygames.com/article/67-privacy-statement">Privacy Statement</a> | <a href="https://help.starcitygames.com/article/58-return-policy">Refund &amp; Return Policy</a>
</div>

<div id='div-gpt-ad-1460054248647-0' style='width:728px; height:90px; margin-left:auto; margin-right:auto;'>
<script type='text/javascript'>
            googletag.cmd.push(function() { googletag.display('div-gpt-ad-1460054248647-0'); });
            </script>
</div>
<div style="clear:both;"></div>
</div>
</footer>
<script src="//www.starcitygames.com/js/jquery.tabify.js"></script>
<script src="//www.starcitygames.com/js/jquery.marquee.js"></script>
<script src="//www.starcitygames.com/js/jquery.mousewheel.js"></script>
<script src="//www.starcitygames.com/js/jquery.jscrollpane.min.js"></script>
<script src="//www.starcitygames.com/js/jquery.jcarousel.min.js"></script>
<script src="//www.starcitygames.com/assets/plugins/chosen-bootstrap/chosen/chosen.jquery.min.js"></script>
<script src="//www.starcitygames.com/js/jquery.validate.js"></script>
<script src="//www.starcitygames.com/assets/plugins/jquery-qtip/jquery.qtip.min.js"></script>
<script src="//www.starcitygames.com/javascript/jquery.cart_AJAX.js"></script>
<script src="//www.starcitygames.com/js/jquery.flexslider-min.js"></script>
<script src="//www.starcitygames.com/library/scripts/jquery.cycle.all.js"></script>
<script src="//www.starcitygames.com/js/jquery.autocomplete_all_products.js"></script>
<script src="//www.starcitygames.com/javascript/site_definitions.php"></script>
<script src="//www.starcitygames.com/js/site.js"></script>


</body>
</html>
`

const { JSDOM } = jsdom;

function stripHTML (rawHTML) {
    const dom = new JSDOM(rawHTML);
    oddRows = dom.window.document.querySelectorAll(".deckdbbody_row")
    evenRows = dom.window.document.querySelectorAll(".deckdbbody2_row")
    
    oddRows.forEach(row => {
        // obtengo nombre
        var res = row.querySelector('.search_results_1')
        if (res.className.includes("deckdbbody_notop")) {
            // no tiene el nombre, misma categoria de la fila anterior
            console.log('nombre anterior')
        } else {
            name = res.querySelector('a').innerHTML
            console.log(name)
        }
    
        // obtengo categoria
        res = row.querySelector('.search_results_2')
        if (res.className.includes("deckdbbody_notop")){
            // no tiene el nombre, misma categoria de la fila anterior
            console.log('categoria anterior')
        } else {
            category = res.querySelector('a').innerHTML
            console.log(category)
        }
    
        // obtengo el tipo
        type = row.querySelector('.search_results_4').innerHTML
        console.log(type)
    
        // obtengo el costo de mana
        if (type.toLowerCase() == "land") {
            // es una tierra deje vacio
        } else {
            // obtengo la lista de colores de mana
            res = row.querySelector('.search_results_3')
            mana = res.querySelectorAll('i')
            var red = 0;
            var white = 0;
            var blue = 0;
            var black = 0;
            var green = 0;
            var colorless = 0;
            var phyrexianRed = 0;
            var phyrexianWhite = 0;
            var phyrexianBlue = 0;
            var phyrexianBlack = 0;
            var phyrexianGreen = 0;
            var snow = 0;
            var x = 0;
            var y = 0;
            var z = 0;
            var half = 0;
            var infinity = 0;
            var energy = 0;
            var generic = 0;
            var whiteBlue = 0;
            var blueBlack = 0;
            var blackRed = 0;
            var redGreen = 0;
            var greenWhite = 0;
            var whiteBlack = 0;
            var blueRed = 0;
            var blackGreen = 0;
            var redWhite = 0;
            var greenBlue = 0;
            var twoWhite = 0;
            var twoBlue = 0;
            var twoBlack = 0;
            var twoRed = 0;
            var twoGreen = 0;
    
            var manaProcessed = 0;
            mana.forEach(m => {
                // check for whiteBlue mana
                if (m.className.match(/ms-wb\b/)) {
                    whiteBlue++;
                // check for blueBlack mana
                } else if(m.className.match(/ms-ub\b/)) {
                    blueBlack++;
                // check for blackRed mana
                } else if(m.className.match(/ms-br\b/)) {
                    blackRed++;
                // check for redGreen mana
                } else if(m.className.match(/ms-rg\b/)) {
                    redGreen++;
                 // check for greenWhite mana
                } else if(m.className.match(/ms-gw\b/)) {
                    greenWhite++;
                // check for whiteBlack mana
                } else if(m.className.match(/ms-wb\b/)) {
                    whiteBlack++;
                // check for blueRed mana
                } else if(m.className.match(/ms-ur\b/)) {
                    blueRed++;
                // check for blackGreen mana
                } else if(m.className.match(/ms-bg\b/)) {
                    blackGreen++;
                // check for redWhite mana
                } else if(m.className.match(/ms-rw\b/)) {
                    redWhite++;
                // check for greenBlue mana
                } else if(m.className.match(/ms-gb\b/)) {
                    greenBlue++;
                // check for twoWhite mana
                } else if(m.className.match(/ms-2w\b/)) {
                    twoWhite++;
                // check for twoBlue mana
                } else if(m.className.match(/ms-2u\b/)) {
                    twoBlue++;
                // check for twoBlack mana
                } else if(m.className.match(/ms-2b\b/)) {
                    twoBlack++;
                // check for twoRed mana
                } else if(m.className.match(/ms-2r\b/)) {
                    twoRed++;
                // check for twoGreen mana
                } else if(m.className.match(/ms-2g\b/)) {
                    twoGreen++;
                // check for red mana
                } else if(m.className.match(/ms-r\b/)) {
                    red++;
                // check for white mana
                } else if (m.className.match(/ms-w\b/)) {
                    white++;
                // check for blue mana
                } else if (m.className.match(/ms-u\b/)) {
                    blue++;
                // check for black mana
                } else if (m.className.match(/ms-b\b/)) {
                    black++;
                // check for green mana
                } else if (m.className.match(/ms-g\b/)) {
                    green++;
                // check for colorless mana
                } else if (m.className.match(/ms-c\b/)) {
                    colorless++;
                // check for red phyrexian mana
                } else if (m.className.match(/ms-rp\b/)) {
                    phyrexianRed++;
                // check for white phyrexian mana
                }  else if (m.className.match(/ms-wp\b/)) {
                    phyrexianRed++;
                // check for blue phyrexian mana
                }  else if (m.className.match(/ms-up\b/)) {
                    phyrexianRed++;
                // check for black phyrexian mana
                }  else if (m.className.match(/ms-bp\b/)) {
                    phyrexianRed++;
                // check for green phyrexian mana
                }  else if (m.className.match(/ms-gp\b/)) {
                    phyrexianRed++;
                // check for snow mana
                }  else if (m.className.match(/ms-s\b/)) {
                    snow++;
                // check for x mana
                }  else if (m.className.match(/ms-x\b/)) {
                    x++;
                // check for y mana
                }  else if (m.className.match(/ms-y\b/)) {
                    y++;
                // check for z mana
                } else if (m.className.match(/ms-z\b/)) {
                    z++;
                // check for half mana
                } else if (m.className.match(/ms-1-2\b/)) {
                    half++;
                // check for infinite mana
                } else if (m.className.match(/ms-infinty\b/)) {
                    infinity++;
                // check for energy mana
                } else if (m.className.match(/ms-e\b/)) {
                    energy++;
                // debe de ser un numer, mana generico
                } else if (m.className.match(/ms-\d+\b/)) {
                    var digit = m.className.match(/\d+\b/)
                    generic += parseInt(digit)
                }
    
                manaProcessed++;
                if (manaProcessed == mana.length) {
                    console.log({
                        'red': red,
                        'white': white,
                        'blue': blue,
                        'black': black,
                        'green': green,
                        'colorless': colorless,
                        'whiteBlue': whiteBlue,
                        'blueBlack': blueBlack,
                        'blackRed': blackRed,
                        'redGreen': redGreen,
                        'greenWhite': greenWhite,
                        'whiteBlack': whiteBlack,
                        'blueRed': blueRed,
                        'blackGreen': blackGreen,
                        'redWhite': redWhite,
                        'greenBlue': greenBlue,
                        'twoWhite': twoWhite,
                        'twoBlue': twoBlue,
                        'twoBlack': twoBlack,
                        'twoRed': twoRed,
                        'twoGreen': twoGreen,
                        'phyrexianRed': phyrexianRed,
                        'phyrexianWhite': phyrexianWhite,
                        'phyrexianBlue': phyrexianBlue,
                        'phyrexianBlack': phyrexianBlack,
                        'phyrexianGreen': phyrexianGreen,
                        'generic': generic,
                        'x': x,
                        'y': y,
                        'z': z,
                        'half': half,
                        'infinity': infinity,
                        'energy': energy,
                        'snow': snow
                    })
                }
            })
        }
    });
}

request({
    uri: "http://www.starcitygames.com/results?name=Kozilek%2C+the+Great+Distortion&auto=Y"
}, (err, res, body) => {
    if (err) throw err;
    stripHTML(body)
})
/*
const root = HTMLParser.parse(html);
q = root.querySelector('.deckdbbody_row'),
console.log(q.childNodes[0].childNodes[0].innerHTML);
*/