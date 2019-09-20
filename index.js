const request = require('request');
const jsdom = require("jsdom");
const fs = require('fs')
const { JSDOM } = jsdom;

// maneja el proceso para obtener la informacion
function stripHTML (rawHTML, cb) {
    let pagesProcessed = 0;
    const dom = new JSDOM(rawHTML);

    tableLast = dom.window.document.querySelectorAll('#content table:last-of-type')[1]
    links = tableLast.querySelectorAll('td a')
    
    oddRows = dom.window.document.querySelectorAll(".deckdbbody_row")
    evenRows = dom.window.document.querySelectorAll(".deckdbbody2_row")
    itemDefile(oddRows, (items) => {
        itemDefile(evenRows, (items2) => {
            pagesProcessed++
            items = items.concat(items2)
            if (pagesProcessed >= links.length-1) {
                cb(items)
            } else {
                for (let i=1; i<links.length-1; i++) {
                    request({uri: links[i].href}, (err, res, body) => {
                        if (err) throw err;
                        stripInnerHTML(body, (itemsn) => {
                            items = items.concat(itemsn)
                            pagesProcessed++
                            if (pagesProcessed >= links.length-1) {
                                cb(items)
                            }
                        })
                    })
                }
            }
        })
    })
}


// manages dividing, doesn't care for more pages
function stripInnerHTML (rawHTML, cb) {
    const dom = new JSDOM(rawHTML);
    
    oddRows = dom.window.document.querySelectorAll(".deckdbbody_row")
    evenRows = dom.window.document.querySelectorAll(".deckdbbody2_row")

    itemDefile(oddRows, (items) => {
        itemDefile(evenRows, (items2) => {
            cb(items.concat(items2))
        })
    })
}

// Saca las filas
function itemDefile (rows, callback) {
    let items = []
    let itemsProcessed = 0
    isCard = true
    isCreature = false
    isLand = true

    let category
    let name
    let type
    let manaCost
    let powerToughness
    let rarity
    let condition
    let stock
    let price

    let previousCategory, previousName

    rows.forEach(row => {
        // obtengo nombre
        var res = row.querySelector('.search_results_1')
        if (res.className.includes("deckdbbody_notop") || res.className.includes("deckdbbody2_notop")) {
            // no tiene el nombre, misma categoria de la fila anterior
            name = previousName
        } else {
            name = res.querySelector('a').innerHTML.replace(/(\r\n|\n|\r)/gm,"")
            previousName = name
        }
    
        // obtengo categoria
        res = row.querySelector('.search_results_2')
        if (res.className.includes("deckdbbody_notop") || res.className.includes("deckdbbody2_notop")){
            // no tiene el nombre, misma categoria de la fila anterior
            category = previousCategory
        } else {
            category = res.querySelector('a').innerHTML.replace(/(\r\n|\n|\r)/gm,"")
            previousCategory = category
        }
    
        // obtengo el tipo
        type = row.querySelector('.search_results_4').innerHTML.replace(/(\r\n|\n|\r)/gm,"")
        if (type == '') isCard = false
    
        // saco detalles unicos de las cartas
        if (isCard) {
            // obtengo el costo de mana
            if (type.toLowerCase() == "land") {
                isLand = true
                manaCost = null
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
                       manaCost =  {
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
                        }
                    }
                })
            }

            // obtengo el ataque y defensa de las criaturas
            if (type.toLowerCase().match(/creature\b/)) {
                isCreature = true
                res = row.querySelector(".search_results_5")
                text = res.innerHTML.split('/')
                power = parseInt(text[0])
                toughness = parseInt(text[1])
                powerToughness = {
                    'poder': power,
                    'resistencia': toughness
                }
            } else{
                powerToughness = null
            }

            // obtengo la rareza
            res = row.querySelector(".search_results_6")
            rarity = res.innerHTML
        }

        // obtengo la condicion
        res = row.querySelector(".search_results_7 a")
        condition = res.innerHTML

        // obtengo el stock
        res = row.querySelector(".search_results_8")
        if (res.innerHTML.toLowerCase() == "out of stock") {
            stock = 0
        } else {
            stock = parseInt(res.innerHTML)
        }

        // obtengo el precio
        res = row.querySelector(".search_results_9")
        price = parseFloat(res.innerHTML.substr(1))

        if (isCard) {
            items.push({
                nombre: name,
                categoria: category,
                tipo: type,
                mana: manaCost,
                powerToughness: powerToughness,
                raresa: rarity,
                condicion: condition,
                stock: stock,
                precio: price
            })
        } else {
            items.push({
                nombre: name,
                categoria: category,
                condicion: condition,
                stock: stock,
                precio: price
            })
        }
        itemsProcessed++
        if (itemsProcessed == rows.length) {
            callback(items)
        }
    });
}

if (process.argv[2] == 'local') {
    fs.readFile(process.argv[3], (err, data) => {
        if (err) throw err;
        stripHTML(data, (items) => {
            console.log(items)
        })
    })
} else {
    request({uri: process.argv[2]}, (err, res, body) => {
        if (err) throw err;
        stripHTML(body, (items) => {
            console.log(items)
        })
    })
}