const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./ws.db')

db.serialize(function () {

    // Criar a tabela

    // inserar nova column na table
    /*db.run(`ALTER TABLE ideas
            ADD COLUMN link TEXT;
    `)*/
    
    db.run(`
        CREATE TABLE IF NOT EXISTS ideas(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            image TEXT,
            title TEXT,
            category TEXT,
            description TEXT,
            link TEXT        
        );
    `)
    
    // Inserir dado na tabela
    /* const query = `
        INSERT INTO ideas(
            image,
            title,
            category,
            description,
            link
        ) VALUES (?,?,?,?,?);
    `

    const values = [
        "https://image.flaticon.com/icons/svg/2729/2729027.svg",
        "Meditação",
        "Saúde",
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit.",
        "http://rocketseat.com.br/",
    ]
    
    
    db.run(query, values, function(error){
        if(error) return console.log(error)

        console.log(this)
    }) */

    // Consultar dado na tabela

    db.all(`SELECT * FROM ideas`, function(err, rows){
        if (err) return console.log(err)

        console.log(rows)
    })

    // Deletar um dado da tabela
    /* db.run(`DELETE FROM ideas WHERE id = ?`, [2], function(err){
        if (err) return console.log(err)

        console.log("DELETED", this)
    }) */

})

module.exports = db