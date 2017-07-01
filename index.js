import { create } from 'rung-sdk';
import { String as Text, OneOf, Integer } from 'rung-sdk/dist/types';
import {
    values,
    mapObjIndexed,
    prop,
    find,
    propEq,
    replace,
} from 'ramda';
import Bluebird from 'bluebird';
import agent from 'superagent';
import promisifyAgent from 'superagent-promise';
import moment from 'moment';

const request = promisifyAgent(agent, Bluebird);

const carIcon = 'https://goo.gl/55BNCQ';

function render(body, type) {
    return { [body.fipe_codigo + body.ano_modelo]: {
        title: body.name,
        content: renderContent(body, type),
        comment: renderComment(body, type)
    } };
}

function renderContent({ name, ano_modelo, marca, preco }) {
    return (
        <div>
            <img style={ { width:'30px' } } src={ carIcon } />
            <div style={ { fontWeight:'bold' } }>
                { `${marca}` }
            </div>
            <div>
                { `${name}` }
            </div>
            <div style={{fontSize:'10px'}}>
                { `${ano_modelo}` }
            </div>
            <div>
                { `${preco}` }
            </div> 
        </div>
    );
}

function renderComment({ name, ano_modelo, marca, preco }) {
    const iconStyle = 'width: 48px;';
    const icon = `<img style=${JSON.stringify(iconStyle)} src=${JSON.stringify(carIcon)} />`;

    return `
        ${icon}
        
        #### ${name}
         - Marca:  ${marca}
         - Ano: ${ano_modelo}
         - Preço FIPE:  ${preco}`;
}

function main(context, done) {
    const { type, brand, id, year, cost } = context.params;
    const carId = prop('id', find(propEq('name', brand), brands));
    const url = `http://fipeapi.appspot.com/api/1/carros/veiculo/${carId}/${id}/${year}-1.json`;

    return request.get(url)
        .then(({ body }) => {
            const price = parseInt(replace('.', '', replace('R$ ', '', body.preco)));
    
            if (price <= cost) {
                done({ alerts: render(body) });
            } else {
                done({ alerts: {} });
            }
        })
        .catch(err => {
            console.log(err);
            done({ alerts: {} });
        });
}

const brands = [
    {
        id: 6,
        name: "AUDI"
    },
    {
        id: 7,
        name: "BMW"
    },
    {
        id: 13,
        name: "CITROEN"
    },
    {
        id: 21,
        name: "FIAT"
    },
    {
        id: 22,
        name: "FORD"
    },
    {
        id: 23,
        name: "CHEVROLET"
    },
    {
        id: 25,
        name: "HONDA"
    },
    {
        id: 26,
        name: "HYUNDAI"
    },
    {
        id: 31,
        name: "KIA"
    },
    {
        id: 39,
        name: "MERCEDES-BENZ"
    },
    {
        id: 41,
        name: "MITSUBISHI"
    },
    {
        id: 43,
        name: "NISSAN"
    },
    {
        id: 44,
        name: "PEUGEOT"
    },
    {
        id: 48,
        name: "RENAULT"
    },
    {
        id: 55,
        name: "SUZUKI"
    },
    {
        id: 56,
        name: "TOYOTA"
    },
    {
        id: 58,
        name: "VOLVO"
    },
    {
        id: 59,
        name: "VOLKSWAGEN"
    },
    {
        id: 1,
        name: "ACURA"
    },
    {
        id: 2,
        name: "AGRALE"
    },
    {
        id: 3,
        name: "ALFA ROMEO"
    },
    {
        id: 4,
        name: "AM GEN"
    },
    {
        id: 5,
        name: "ASIA MOTORS"
    },
    {
        id: 189,
        name: "ASTON MARTIN"
    },
    {
        id: 8,
        name: "BRM"
    },
    {
        id: 9,
        name: "BUGGY"
    },
    {
        id: 123,
        name: "BUGRE"
    },
    {
        id: 10,
        name: "CADILLAC"
    },
    {
        id: 11,
        name: "CBT JIPE"
    },
    {
        id: 136,
        name: "CHANA"
    },
    {
        id: 182,
        name: "CHANGAN"
    },
    {
        id: 161,
        name: "CHERY"
    },
    {
        id: 12,
        name: "CHRYSLER"
    },
    {
        id: 14,
        name: "CROSS LANDER"
    },
    {
        id: 15,
        name: "DAEWOO"
    },
    {
        id: 16,
        name: "DAIHATSU"
    },
    {
        id: 17,
        name: "DODGE"
    },
    {
        id: 147,
        name: "EFFA"
    },
    {
        id: 18,
        name: "ENGESA"
    },
    {
        id: 19,
        name: "ENVEMO"
    },
    {
        id: 20,
        name: "FERRARI"
    },
    {
        id: 149,
        name: "FIBRAVAN"
    },
    {
        id: 190,
        name: "FOTON"
    },
    {
        id: 170,
        name: "FYBER"
    },
    {
        id: 199,
        name: "GEELY"
    },
    {
        id: 153,
        name: "GREAT WALL"
    },
    {
        id: 24,
        name: "GURGEL"
    },
    {
        id: 152,
        name: "HAFEI"
    },
    {
        id: 27,
        name: "ISUZU"
    },
    {
        id: 177,
        name: "JAC"
    },
    {
        id: 28,
        name: "JAGUAR"
    },
    {
        id: 29,
        name: "JEEP"
    },
    {
        id: 154,
        name: "JINBEI"
    },
    {
        id: 30,
        name: "JPX"
    },
    {
        id: 32,
        name: "LADA"
    },
    {
        id: 171,
        name: "LAMBORGHINI"
    },
    {
        id: 33,
        name: "LAND ROVER"
    },
    {
        id: 34,
        name: "LEXUS"
    },
    {
        id: 168,
        name: "LIFAN"
    },
    {
        id: 127,
        name: "LOBINI"
    },
    {
        id: 35,
        name: "LOTUS"
    },
    {
        id: 140,
        name: "MAHINDRA"
    },
    {
        id: 36,
        name: "MASERATI"
    },
    {
        id: 37,
        name: "MATRA"
    },
    {
        id: 38,
        name: "MAZDA"
    },
    {
        id: 40,
        name: "MERCURY"
    },
    {
        id: 167,
        name: "MG"
    },
    {
        id: 156,
        name: "MINI"
    },
    {
        id: 42,
        name: "MIURA"
    },
    {
        id: 45,
        name: "PLYMOUTH"
    },
    {
        id: 46,
        name: "PONTIAC"
    },
    {
        id: 47,
        name: "PORSCHE"
    },
    {
        id: 185,
        name: "RAM"
    },
    {
        id: 186,
        name: "RELY"
    },
    {
        id: 195,
        name: "ROLLS-ROYCE"
    },
    {
        id: 49,
        name: "ROVER"
    },
    {
        id: 50,
        name: "SAAB"
    },
    {
        id: 51,
        name: "SATURN"
    },
    {
        id: 52,
        name: "SEAT"
    },
    {
        id: 183,
        name: "SHINERAY"
    },
    {
        id: 157,
        name: "SMART"
    },
    {
        id: 125,
        name: "SSANGYONG"
    },
    {
        id: 54,
        name: "SUBARU"
    },
    {
        id: 165,
        name: "TAC"
    },
    {
        id: 57,
        name: "TROLLER"
    },
    {
        id: 163,
        name: "WAKE"
    },
    {
        id: 120,
        name: "WALK"
    }
];

const params = {
    brand: {
        description: _('Qual a marca?'),
        type: OneOf(values(mapObjIndexed(prop('name'), brands)))
    },
    id: {
        description: _('Código FIPE'),
        type: Text
    },
    year: {
        description: _('Informe o ano'),
        type: Integer
    },
    cost: {
        description: _('Informe o valor'),
        type: Integer
    }
};

const preview = {
    name: "Palio 1.0 ECONOMY Fire Flex 8V 4p",
    marca: "Fiat",
    ano_modelo: "2013",
    preco: "R$ 22.212,00"
};

export default create(main, {
    params,
    primaryKey: true,
    title: _('Cotação FIPE'),
    description: _('Seja alertado quando um carro atingir um valor mínimo conforme a tabela FIPE.'),
    preview: renderContent(preview)
});
