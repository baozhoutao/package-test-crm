const objectql = require('@steedos/objectql');

module.exports = {
    listenTo: 'try_obj1',

    beforeInsert: async function(){
        console.log(`try_obj1 beforeInsert`)
    },

    beforeUpdate: async function(){
        console.log(`try_obj1 beforeUpdate`)
    },

    beforeDelete: async function(){
        console.log(`try_obj1 beforeDelete`)
    },

    afterInsert: async function(){
        console.log(`try_obj1 afterInsert`)
    },

    afterUpdate: async function(){
        console.log(`try_obj1 afterUpdate`)
    },

    afterDelete: async function(){
        console.log(`try_obj1 afterDelete`)
    },

}