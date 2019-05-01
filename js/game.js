LEVEL = 1;

DATA = [
  {"_id":"person1", "name": "Kati", "geschlecht":"weiblich", "haare":"rot", "koffer":true, "gewicht":22},
  {"_id":"person2", "name": "Gary", "geschlecht":"männlich", "haare":"blond", "koffer":true, "gewicht":8},
  {"_id":"person3", "name": "Julia", "geschlecht":"weiblich", "haare":"schwarz", "koffer":false },
  {"_id":"person4", "name": "Britta", "geschlecht":"weiblich", "haare":"blond", "koffer":true, "gewicht":2},
  {"_id":"person5", "name": "Dominik", "geschlecht":"männlich", "haare":"rot", "koffer":true, "gewicht":14},
  {"_id":"person6", "name": "Mike", "geschlecht":"männlich", "haare":"braun", "koffer":true, "gewicht":28},
  {"_id":"person7", "name": "Jim", "geschlecht":"männlich", "haare":"rot", "koffer":true, "gewicht":19},
  {"_id":"person8", "name": "Anke", "geschlecht":"weiblich", "haare":"braun", "koffer":true, "gewicht":11}
];

TASKS = [
 {"question": "Du bist ein Geheim-Detektiv und hast den Auftrag, den Namen eines Diamanten-Diebs herauszufinden, der 20 kg Diebesgut bei sich hat und sich in diesem Flugzeug befindet. Nutze SQL-Befehle, um den Dieb zu finden! Nun verschaffe dir aber erst mal einen Überblick über alle Personen, die im Flugzeug mitfliegen. Ein Tipp: Du brauchst dazu nur die ersten zwei Walzen.",
  "answers": ["SELECT * FROM personen"]},
 {"question": "Wie ich sehe, hast du den Dreh raus! SELECT * zeigt dir alle Eigenschaften der Passagiere. Zeige mir mal spaßeshalber nur deren Frisuren!",
  "answers": ["SELECT haare FROM personen"]},
 {"question": "Okay, das hilft uns bei der Suche nach dem Diamantendieb zwar nicht besonders weiter, aber das ist erst mal egal. Zeige mir nochmal bitte die Frisuren und wie die dazugehörige Person heißt.",
  "answers": ["SELECT haare, name FROM personen"]},
 {"question": "Jetzt lass uns die Suche nach dem Dieb beginnen! Die meisten Diebe sind statistisch gesehen Männer. Zeige also bitte mal alle Männer an. Du darfst ab jetzt wieder SELECT * verwenden, um alle Details einzublenden.",
  "answers": ["SELECT * FROM personen WHERE geschlecht = 'männlich'"]},
 {"question": "Was höre ich da vom Bordpersonal? Der Dieb hatte rote Haare! Welche Männer kommen da infrage? Achtung: != steht für ungleich, das werden wir nicht brauchen!",
  "answers": ["SELECT * FROM personen WHERE geschlecht = 'männlich' AND haare = 'rot'","SELECT * FROM personen WHERE haare = 'rot' AND geschlecht = 'männlich'"]},
 {"question": "Aha! Da waren's nur noch zwei! Nur mal rein Interesse halber: Welche Personen sind soeben ausgeschieden? Zeige alles außer Männer mit roten Haaren! Das ist ein bisschen schwer, aber ich bin mir sicher, wenn du etwas genauer nachdenkst, kommst du auf die Lösung. Ein Tipp: Wir brauchen jetzt den Ungleich-Operator !=",
  "answers": ["SELECT * FROM personen WHERE geschlecht = 'weiblich' OR haare != 'rot'","SELECT * FROM personen WHERE haare != 'rot' OR geschlecht = 'weiblich'"]},
 {"question": "Super gemacht! Diese Leute sind also nicht der Dieb. Schauen wir uns jetzt mal das Gepäck der Leute an. Blende mal die Personen wieder aus und dafür blendest du alle Koffer ein.",
  "answers": ["SELECT * FROM koffer"]},
 {"question": "Wow, fast jeder hat einen Koffer dabei! Zeige jetzt mal die Koffer zusammen mit ihrem Besitzer.",
  "answers": ["SELECT * FROM personen NATURAL JOIN koffer"]},
 {"question": "Wie war das nochmal mit dem Diebesgut? Der Dieb hat 20kg Diamanten gestohlen. Zeige mal alle Männer und deren Koffer, sofern dieser mehr als 20kg wiegt.",
  "answers": ["SELECT * FROM personen NATURAL JOIN koffer WHERE geschlecht = 'männlich' AND gewicht > 20", "SELECT * FROM personen NATURAL JOIN koffer WHERE gewicht > 20 AND geschlecht = 'männlich'"]},
 {"question": "Was ist das denn? Das ist ja Mike! Er kann nicht der Dieb sein, denn er hat braune Haare! Vielleicht handelt es sich ja bei unserem Diamantendieb doch um eine Diebin? Zeige mal bitte alle rothaarigen Frauen.",
  "answers": ["SELECT * FROM personen WHERE geschlecht = 'weiblich' AND haare = 'rot'","SELECT * FROM personen WHERE haare = 'rot' AND geschlecht = 'weiblich'"]},
 {"question": "Aha! Kati! Wer hätte das gedacht? Zeige mir mal bitte, wie viel ihr Gepäckstück wiegt!",
  "answers": ["SELECT gewicht FROM personen NATURAL JOIN koffer WHERE geschlecht = 'weiblich' AND haare = 'rot'","SELECT gewicht FROM personen NATURAL JOIN koffer WHERE haare = 'rot' AND geschlecht = 'weiblich'"]}
];

TXT_END_GAME = 'Katja Rucksack wiegt 22kg! Lass uns mal hineinschauen! Dort sind die gestohlenen Diamanten! Katja ist die Diebin! Du hast es geschafft! Super! Wenn dir das Spiel Spaß gemacht hat, probiere doch mal das kostenlose Spiel "SQL Island" aus. In dem Spiel bist du auf einer Insel gestrandet und musst selbst SQL-Anfragen schreiben, um von der Insel zu entkommen.'


pick_select=new Picker(document.querySelector('.pick-select'), {
  inline: true, rows:3, format: 'MMMM', months: ['SELECT haare, name', ' ', 'SELECT *','SELECT name','SELECT haare','SELECT gewicht','SELECT haare, name',' ', 'SELECT *','SELECT name','SELECT haare','SELECT gewicht'],
});
pick_from=new Picker(document.querySelector('.pick-from'), {
  inline: true, rows:3, format: 'MMMM', months: ['FROM personen NATURAL JOIN koffer', ' ', 'FROM personen', 'FROM koffer', 'FROM personen NATURAL JOIN koffer', ' ', 'FROM personen', 'FROM koffer', 'FROM personen NATURAL JOIN koffer', ' ', 'FROM personen', 'FROM koffer']
});
pick_where1=new Picker(document.querySelector('.pick-where1'), {
  inline: true, rows:3, format: 'MMMM', months: ['WHERE geschlecht', ' ', 'WHERE haare', 'WHERE gewicht', 'WHERE geschlecht', ' ', 'WHERE haare', 'WHERE gewicht', 'WHERE geschlecht',' ', 'WHERE haare', 'WHERE gewicht']
});
pick_where2=new Picker(document.querySelector('.pick-where2'), {
  inline: true, rows:3, format: 'MMMM', months: ['!= \'schwarz\'', ' ', '> 20', '= \'weiblich\'', '= \'männlich\'', '= \'braun\'', '= \'blond\'', '= \'rot\'', '= \'schwarz\'', '!= \'braun\'', '!= \'blond\'', '!= \'rot\'']
});
pick_where3=new Picker(document.querySelector('.pick-where3'), {
  inline: true, rows:3, format: 'MMMM', months: [' ', ' ','AND haare', 'AND gewicht', 'AND geschlecht', 'OR haare', 'OR gewicht','OR geschlecht',' ',' ',' ',' ']
});
pick_where4=new Picker(document.querySelector('.pick-where4'), {
  inline: true, rows:3, format: 'MMMM', months: ['!= \'schwarz\'', ' ', '> 20', '= \'weiblich\'', '= \'männlich\'', '= \'braun\'', '= \'blond\'', '= \'rot\'', '= \'schwarz\'', '!= \'braun\'', '!= \'blond\'', '!= \'rot\'']
});

function get_input(item) {
  switch(item) {
    case "select": return pick_select.options.months[pick_select.getDate().getMonth()].replace(/[\s	⁣]+/g, ' ').trim();
    case "from": return pick_from.options.months[pick_from.getDate().getMonth()].replace(/[\s	⁣]+/g, ' ').trim();
    case "where1": return pick_where1.options.months[pick_where1.getDate().getMonth()].replace(/[\s	⁣]+/g, ' ').trim();
    case "where2": return pick_where2.options.months[pick_where2.getDate().getMonth()].replace(/[\s	⁣]+/g, ' ').trim();
    case "where3": return pick_where3.options.months[pick_where3.getDate().getMonth()].replace(/[\s	⁣]+/g, ' ').trim();
    case "where4": return pick_where4.options.months[pick_where4.getDate().getMonth()].replace(/[\s	⁣]+/g, ' ').trim();
  }
}


function get_query() {
  sql = get_input("select") + " " + get_input("from") + " " + get_input("where1") + " " + get_input("where2") + " " + get_input("where3") + " " + get_input("where4") + " ";
  return sql.replace(/[\s	⁣]+/g, ' ').trim()
}

function new_game() {
  DATA.forEach(function(person) {  $('#'+person._id).hide() })        // hide all people

  DATA.forEach(function(person) {
    $('#'+person._id+' > .personname')[0].innerHTML = person.name
    if(person.gewicht != undefined) {
        $('#'+person._id+' > .weight')[0].innerHTML = person.gewicht + " kg"
    }
  })

  LEVEL = 1;
  show_question();
}

function show_question() {
  $('#question')[0].innerHTML = TASKS[LEVEL-1].question;
  $('#level')[0].innerHTML = "Level "+LEVEL+" von "+TASKS.length;
}

function game_over() {
  $('.person_div').hide();
  $('#person_end').show();
  $('#question')[0].innerHTML = TXT_END_GAME;
}

$('#restart-button').click(function(e){
  $('#game_menu').removeClass('expanded');
  new_game();
  $('.menu-content')[0].style.display = 'none'
 });


 $('#info-button').click(function(e){
    $('#info-modal').foundation('reveal','open');
  });


/** functions for performing a projection or selection on arrays of objects **/
function projection(keys, arr) {
	res = []
	for (i in arr) {
		res[i] = {}
		for (k in arr[i]) { if (keys.indexOf(k)>-1) { res[i][k] = arr[i][k] } }
	}
	return res
}

const selection = (key,op,val,arr) => arr.filter(function(obj) {
    return op=="=" && obj[key]==val || op=="<" && obj[key]<val || op==">" && obj[key]>val
        || op==">=" && obj[key]>=val|| op=="<=" && obj[key]<=val|| op=="!=" && obj[key]!=val})


function display_result() {
    DATA.forEach(function(person) {  $('#'+person._id).hide() })        // hide all people
    DATA.forEach(function(person) {  $('#'+person._id+' > *').hide() }) // hide all elements
    res = DATA

    /* FROM: tables, joins */
    switch(get_input("from")) {
        case "FROM personen": res = projection(["_id","name","geschlecht","haare"], res); break;
        case "FROM koffer": res = projection(["_id","koffer", "gewicht"], res); break;
    }

    /* WHERE: selection */
    sel = [
        { "key": get_input("where1").substr(6),
          "op": get_input("where2").substr(0,get_input("where2").indexOf(' ')),
          "val": get_input("where2").substr(get_input("where2").indexOf(' ')+1).replace(/'/g,"")},
        { "key": get_input("where3").substr(3).trim(),
          "op": get_input("where4").substr(0,get_input("where4").indexOf(' ')),
          "val": get_input("where4").substr(get_input("where4").indexOf(' ')+1).replace(/'/g,"")}
    ]

    if(get_input("where1").trim()!="" && get_input("where2").trim()=="" && get_input("where3").trim()=="" && get_input("where4").trim()!="") {
      sel = [{ "key": get_input("where1").substr(6),
        "op": get_input("where4").substr(0,get_input("where4").indexOf(' ')),
        "val": get_input("where4").substr(get_input("where4").indexOf(' ')+1).replace(/'/g,"")}]
    }

    logical_operator = get_input("where3").substr(0,3).trim();

    if(sel[0].key!="") {
        res1 = selection(sel[0].key, sel[0].op, sel[0].val, res);

        if(logical_operator == "AND") {
            res = selection(sel[1].key, sel[1].op, sel[1].val, res1);
        } else if(logical_operator == "OR") {
            res2 = selection(sel[1].key, sel[1].op, sel[1].val, res);
            res = arrayUnique(res1.concat(res2))
        } else {
            res = res1
        }
    }
    res.forEach(function(person) { $('#'+person._id).show() })

    /* SELECT: projection */
    if (get_input("select") != 'SELECT *') {
        proj = get_input("select").substr(7).split(', ')
        proj.push('_id')
        res = projection(proj, res);
    }

    res.forEach(function(person) {
        if(person.name != undefined) {
            $('#'+person._id+' > .personname').show()
        }
        if(person.haare != undefined) {
            $('#'+person._id+' > .hair').show()
        }
        if(person.geschlecht != undefined) {
            $('#'+person._id+' > .person').show()
        }
        if(person.koffer != undefined && person.koffer) {
            $('#'+person._id+' > .bag').show()
        }

        if(person.gewicht != undefined) {
            $('#'+person._id+' > .weight').show()
        }
    })
}

function syntax_ok() {
  if(get_input("select") == "") { return false; }
  if(get_input("from") == "") { return false; }
  if(get_input("where1") == "" && (get_input("where2") != "" || get_input("where3") != "" || get_input("where4") != "")) { return false; }
  if(get_input("where3") == "" && get_input("where4") != "" && !(get_input("where1") != "" && get_input("where2") == "")) { return false; }
  if(get_input("where1") != "" && get_input("where2") == "" && ((get_input("where3") != "" && get_input("where4") != "") || get_input("where3") == "" && get_input("where4") == "")) { return false; }
  if(get_input("where3") != "" && get_input("where4") == "") { return false; }
  return true;
}

function submit_answer() {
  var answer = get_query();

  if(!syntax_ok()) {
    $("#screen-index").effect( "shake" );
    return;
  }

  display_result();

  if (TASKS[LEVEL-1].answers.indexOf(answer) >= 0) {
    if(LEVEL>=TASKS.length) {
      game_over();
      return;
    }
    LEVEL++;
    show_question();
  } else {
    $("#screen-index").effect( "shake" );
  }
}

jQuery(document).ready(function ($) {

  new_game();

  $('#submit-query-button').click(function(e){
    submit_answer();
  });
});



// https://stackoverflow.com/a/1584377/1065880
function arrayUnique(array) {
    var a = array.concat();
    for(var i=0; i<a.length; ++i) {
        for(var j=i+1; j<a.length; ++j) {
            if(a[i] === a[j])
                a.splice(j--, 1);
        }
    }

    return a;
}

// https://stackoverflow.com/a/33034768/1065880
function arraySymDifference(arr1, arr2) {
    return arr1.filter(x => !arr2.includes(x))
               .concat(arr2.filter(x => !arr1.includes(x)));
}
