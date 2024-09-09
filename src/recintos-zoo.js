class RecintosZoo {

    constructor(){
        this.recinto = [
            {
                id: 1,
                tamanho_total: 10,
                especies:
                {
                    'MACACO': 3
                },
                permite_max:
                {
                    'MACACO': 7,
                    'GAZELA': 3
                }
            },
            {
                id: 2,
                tamanho_total: 5,
                especies:{}
            },
            {
                id: 3,
                tamanho_total: 7,
                especies:
                {
                    'GAZELA': 1
                }
            },
            {
                id: 4,
                tamanho_total: 8,
                especies:
                {}
            },
            {
                id: 5,
                tamanho_total: 9,
                especies:
                {
                    'LEÃO': 1
                }
            }
        ]

        this.animal_invalido = {"erro":"Animal inválido"}

        this.recintosViaveis = [];
        
        this.lista_recintosViaveis =
        {
            recintosViaveis: this.recintosViaveis;
        };
    }

    analisaRecintos(animal, quantidade) {
        switch(animal){
            case "LEAO":
                break;
            case "MACACO":
                break;
            case "LEOPARDO":
                break;
            case "CROCODILO":
                break;
            case "GAZELA":
                break;
            case "HIPOPOTAMO":
                break;
            default:
                return console.log(this.animal_invalido);
        }
        
        for(let i = 0; i<this.recinto.length; i++){
            for(let key in this.recinto){
                if(key==animal){
                    this.recintosViaveis.push(this.recinto[i]);
                }
            }
        }
    }

}

//export { RecintosZoo as RecintosZoo };

const zoo = new RecintosZoo();
//console.log(zoo.recinto[0]);

zoo.analisaRecintos("MACACO",2);
