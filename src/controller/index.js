
const getModel = (modelName) => {
    // Récupère le modèle approprié en fonction du paramètre modelName
    switch (modelName) {
        case 'People':
            return require('../database/peoples');
        case 'Films':
            return require('../database/films');
        case 'Planets':
            return require('../database/planets');
        case 'Species':
            return require('../database/species');
        case 'Starships':
            return require('../database/starships');
        case 'Vehicules':
            return require('../database/vehicules');

      default:
        throw new Error(`Invalid model name: ${modelName}`);
    }
  };
  
//   Fonction de contrôleur générique pour gérer les opérations CRUD
  const handleCRUD = (modelName) => {
    const Model = getModel(modelName);
  
    return {
        create: async (req, res) => {
            try {
                // Récupère le dernier élément de la collection + son pk + la date actuelle + le nom du modèle
                const lastItem = await Model.findOne({}, {}, { sort: { pk: -1 } });
                const lastPk = lastItem ? lastItem.pk : 0;
                const currentDate = new Date().toISOString();
                var lowercaseModelName = null
                // Les raisons de ce changement sont les suivantes :
                // 1. le nom du modèle n'est pas toujours le même que celui de la collection
                // 2. le nom du modèle n'est pas toujours en majuscules
                // 3. J'ai créé cette condition parce que le nom du document est "vehicle" et non "vehicule".
                if(modelName == 'Vehicule'){
                    lowercaseModelName = 'vehicle';
                }
                else{
                    lowercaseModelName = modelName.toLowerCase();
                }

                // Ajout de champs supplémentaires au corps de la requête
                const newItem = {
                ...req.body,
                pk: lastPk + 1,
                model: `resources.${lowercaseModelName}`,
                created: currentDate,
                edited: currentDate
                };
            
                const item = await Model.create(newItem);
                res.status(201).json(item);
            } catch (error) {
                res.status(500).json({ error: `Failed to create ${modelName}`, message: error.message });
            }
        },
          
  
        getAll: async (req, res) => {
            try {
                const items = await Model.find();
                res.json(items);
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        },

        getById: async (req, res) => {
            try {
                const item = await Model.findById(req.params.id);
                if (!item) {
                return res.status(404).json({ message: `Cannot find ${modelName}` });
                }
                res.json(item);
            } catch (err) {
                res.status(500).json({ message: err.message });
            }
        },

        update: async (req, res) => {
            try {
                console.log(req.body)
                const item = await Model.findByIdAndUpdate(req.params.id, req.body, {
                new: true
                });
                if (item) {
                res.json(item);
                } else {
                res.status(404).json({ error: `${modelName} not found` });
                }
            } catch (error) {
                res.status(500).json({ error: `Failed to update ${modelName}`, message: error.message });
            }
        },

        delete: async (req, res) => {
            try {
                const item = await Model.findByIdAndDelete(req.params.id);
                if (item) {
                res.json(item);
                } else {
                res.status(404).json({ error: `${modelName} not found` });
                }
            } catch (error) {
                res.status(500).json({ error: `Failed to delete ${modelName}` });
            }
        }
    };
  };
  
  module.exports = handleCRUD;
  