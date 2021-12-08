exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex("produtos").del()
    .then(function () {
      // Inserts seed entries
      return knex("produtos").insert([

        {
          nome:"Mobil", 
          descricao:"Oleo para motores 4 tempos 20w50 API SL/JASO MA2 ", 
          imagem:"", 
          fornecedores_id:1,
          preco: 30.00
        }

      ]);
    });
};
