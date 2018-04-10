title: "Zpoždění příměstských vlaků v okolí Prahy? Většinou do 5 minut"
perex: "Necelých 140 tisíc cestujících dojíždí denně do Prahy některým z příměstských vlaků. Ne vždycky dorazí včas. Většina zpoždění se ale vejde do pěti minut, zjistil server iROZHLAS.cz, který po dobu tří týdnů pravidelně stahoval informace o zpoždění všech vlaků, které jsou součástí těch nejvytíženějších linek S pražské integrované dopravy."
published: "9. dubna 2018"
coverimg: https://www.irozhlas.cz/sites/default/files/styles/zpravy_clanek_telo_4_3/public/uploader/zabotlam_180406-134304_cib.jpg?itok=3db8JVaC
coverimg_note: 'Foto: Elektrická jednotka řady 451/051 (lidově žabotlam), autor <a target="_blank" href="https://cs.wikipedia.org/wiki/Elektrick%C3%A9_jednotky_451_a_452#/media/File:451059-60_Praha_hlavn%C3%AD_n%C3%A1dra%C5%BE%C3%AD.jpg">PetrS.</a>'
styles: []
libraries: [highcharts] #jquery, jquery-csv, d3, highcharts, datatables
options: [noheader] #wide, noheader (, nopic)
---
<left>
	<p>
	<b>Jak jsme sbírali data</b>
	</p><p>
	Informace o zpoždění vlaku jsou veřejné jen ve chvíli, kdy je souprava na cestě, potom číslo z webu Českých drah zmizí. iROZHLAS.cz ukládal po dobu tří týdnů záznamy o zpoždění všech vlaků v rámci vybraných S linek (v rámci jedné S linky jezdí řada různých vlaků) v pražské integrované dopravě. V analýze pracujeme pouze s informacemi ze zastávek v rámci PID, ve chvíli, kdy vlak pokračuje dále, už s jeho zpožděním nekalkulujeme.
	</p>
</left>

Pokud častěji jezdíte mezi Prahou a Berounem, jistě jste zažili nejednu mimořádnost. Zdejší koleje mají dokonce vlastní účet na [Twitteru](https://twitter.com/trat171), kde se cestující o případných problémech dozví.

Z dat nasbíraných za poslední tři týdny plyne, že příměstská linka S7, která do Berouna jezdí, nabere cestou zpoždění poměrně často, jen přibližně 15 procent cest je bez zpoždění. Většinou ale vlak přijede do pěti (60 %), případně do 10 minut (17 % cest). Naopak zpoždění půlhodinových je něco málo přes jedno procento.

Server iROZHLAS.cz po dobu tří týdnů pravidelně stahoval informace o zpoždění všech vlaků, které jsou součástí těch nejvytíženějších linek S pražské integrované dopravy. Šlo o linky S1, S2, S4, S7 a S9, které v běžný pracovní den [přepraví nejvíce cestujících](http://mhd86.cz/2018/02/12/pocty-cestujicich-dojizdejicich-do-prahy-vlakem-v-roce-2017/). Pro představu: jde o 517 jednotlivých vlaků.

Obecně pak platí, že největší zpoždění příměstské vlaky nabírají v ranní a odpolední špičce, tedy okolo 8. a 16. hodiny. Kromě berounské S7 se s určitými problémy potýká i S9 mezi Lysou nad Labem a Benešovem u Prahy.

<wide>
	<div id="linky_comp"></div>
</wide>

Podrobnější srovnání pak poskytne pohled na jednotlivé úseky příměstských linek, a to v obou směrech. Můžete se tedy podívat, jak konkrétně si vede linka na úseku, kudy každé ráno jezdíte do práce. Historické informace o zpoždění jednotlivých vlaků pak poskytuje aplikace [Babitron]( https://kam.mff.cuni.cz/~babilon/zpmapa).

<wide>
	<div id="sbox"></div>
	<div id="linky"></div>
</wide>

Dopravu na trati č. 171 na Beroun komplikuje hlavně špatný technický stav, [podle šéfa příspěvkové organizace Integrovaná doprava Středočeského kraje (IDSK)]( http://zdopravy.cz/sef-idsk-jsme-velmi-nespokojeni-s-infrastrukturou-trat-na-beroun-je-pred-zhroucenim-7093/) Pavla Procházky je doslova „před zhroucením“.

„Je to kombinace několika faktorů, jednak je to velká vytíženost té trati,“ řekl Českému rozhlasu mluvčí PID Filip Drápal. „Od nového jízdního řádu zde přibyly další rychlíky, které nám bohužel omezují kapacitu pro osobní vlaky,“ dodává s tím, že rychlík má ze zákona přednost. „Když je zpožděn rychlík, tak se to přenáší na osobní vlaky,“ vysvětluje. Svou roli pak hraje i staré zabezpečovací zařízení či probíhající rekonstrukce navazující trati Beroun – Králův dvůr.

[Ministerstvo dopravy slibuje](http://www.ceskenoviny.cz/zpravy/trat-z-prahy-do-berouna-ma-slouzit-primestske-doprave/1531936), že bude opravená do roku 2025, zůstane jí ale regionální charakter. Dálkové a vysokorychlostní vlaky budou jezdit jinudy, jednou z možností je stavba tunelu ze Smíchova do Berouna nebo do Hořovic.

Obliba příměstských vlaků navíc pořád stoupá, od roku 2015 strmě narostl zájem o cesty na tratích Praha – Říčany, Praha – Úvaly i Praha – Zeleneč.

<img src="http://mhd86.cz/wp-content/uploads/2018/02/graf-pid.png" style="width: 100%">

_Zdroj: [Ropid](https://pid.cz/) prostředictvím [mhd86.cz](http://mhd86.cz/2018/02/12/pocty-cestujicich-dojizdejicich-do-prahy-vlakem-v-roce-2017/)_