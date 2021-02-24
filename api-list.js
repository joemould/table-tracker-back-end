module.exports = {
  'GET /api': {
    description:
      'serves up a json representation of all the available endpoints of the api'
  },
  'GET /api/orders': {
    description: 'serves up an array of all orders',
    queries: null,
    exampleResponse: {
      orders: [
        {
          order_id: 1,
          table_name: 'table 3',
          food_items: ['lamb tacos', 'beef tacos', 'water'],
          served_items: [],
          description: 'nut allergy',
          starters_ready: true,
          mains_ready: true,
          desserts_ready: true,
          drinks_ready: true,
          is_active: true
        }
      ]
    }
  },
  'GET /api/tables': {
    description: 'serves up an array of all tables',
    queries: { is_active: [true, false] },
    exampleResponse: {
      tables: [
        {
          table_id: 1,
          table_name: 'table 1',
          is_active: true
        }
      ]
    }
  },
  'PATCH /api/tables/:table_id': {
    description:
      'updates the requested table with the is_active object returning the updated table',
    queries: null,
    exampleRequestBody: {
      is_active: false
    },
    exampleResponse: {
      table: {
        table_id: 1,
        table_name: 'table 1',
        is_active: false
      }
    }
  },

  'PATCH /api/tables/:table_id/orders': {
    description:
      'updates the requested table order with additional food_items, course_ready, or is_active booleans',
    queries: null,
    exampleRequestBody: {
      food_items: ['sticky toffee pudding'],
      starters_ready: true,
      drinks_ready: true,
      mains_ready: true
    },
    exampleResponse: {
      order: {
        order_id: 1,
        table_name: 'table 3',
        food_items: ['sticky toffee pudding'],
        served_items: ['lamb tacos', 'beef tacos', 'water'],
        description: 'nut allergy',
        starters_ready: true,
        mains_ready: true,
        desserts_ready: false,
        drinks_ready: true,
        is_active: true
      }
    }
  },
  'POST /tables/:table_id/orders': {
    description:
      'creates a new order for requested table and responds with the new order object',
    queries: null,
    exampleRequestBody: {
      table_name: 'Table 3',
      food_array: ['beef tacos', 'lamb tacos', 'etc'],
      description: 'Nut allergy'
    },
    exampleResponse: {
      order_id: 1,
      table_id: 1,
      food_id: [1, 2],
      description: 'Nut allergy',
      is_ready: false
    }
  }
};
