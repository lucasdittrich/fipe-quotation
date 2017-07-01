### Cotação FIPE

Rung &lt;suporte@rung.com.br&gt;

[![Deploy to Rung](https://i.imgur.com/uijt57R.png)](https://app.rung.com.br/integration/fipe-quotation/customize)

![rung-cli 0.7.4](https://img.shields.io/badge/rung--cli-0.7.4-blue.svg?style=flat-square)
![fipe-quotation 0.1.0](https://img.shields.io/badge/fipe--quotation-0.1.0-green.svg?style=flat-square)

Seja alertado quando um carro atingir um valor mínimo conforme a tabela FIPE.

#### Parameters

|Parameter | Type | Description |
|----------|------|-------------|
| `brand` | `OneOf([AUDI, BMW, CITROEN, FIAT, FORD, CHEVROLET, HONDA, HYUNDAI, KIA, MERCEDES-BENZ, MITSUBISHI, NISSAN, PEUGEOT, RENAULT, SUZUKI, TOYOTA, VOLVO, VOLKSWAGEN, ACURA, AGRALE, ALFA ROMEO, AM GEN, ASIA MOTORS, ASTON MARTIN, BRM, BUGGY, BUGRE, CADILLAC, CBT JIPE, CHANA, CHANGAN, CHERY, CHRYSLER, CROSS LANDER, DAEWOO, DAIHATSU, DODGE, EFFA, ENGESA, ENVEMO, FERRARI, FIBRAVAN, FOTON, FYBER, GEELY, GREAT WALL, GURGEL, HAFEI, ISUZU, JAC, JAGUAR, JEEP, JINBEI, JPX, LADA, LAMBORGHINI, LAND ROVER, LEXUS, LIFAN, LOBINI, LOTUS, MAHINDRA, MASERATI, MATRA, MAZDA, MERCURY, MG, MINI, MIURA, PLYMOUTH, PONTIAC, PORSCHE, RAM, RELY, ROLLS-ROYCE, ROVER, SAAB, SATURN, SEAT, SHINERAY, SMART, SSANGYONG, SUBARU, TAC, TROLLER, WAKE, WALK])` | Qual a marca? |
| `id` | `String` | Código FIPE |
| `year` | `Integer` | Informe o ano |
| `cost` | `Integer` | Informe o valor |

<img align="left" width="256" src="./icon.png" />

##### Dependencies

- `bluebird`: `^3.4.7`
- `ramda`: `^0.23.0`
- `rung-sdk`: `^1.0.6`
- `superagent`: `^3.5.0`
- `superagent-promise`: `^1.1.0`
