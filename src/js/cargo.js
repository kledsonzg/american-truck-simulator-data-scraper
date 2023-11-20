function ExecuteScript() 
{ 
    console.log('Executando script!');
    
    let element = document.getElementsByClassName('table-wide-inner')[0].getElementsByTagName('tbody')[0];

    let rows = element.getElementsByTagName('tr');
    let objs = [];

    for(let i = 0; i < rows.length; i++)
    {
        let row = rows[i];
        let columns = row.getElementsByTagName('td');
        let obj = {
            carga: '',
            dlc: '',
            peso: '',
            types: [],
            icon: ''
        };

        for(let j = 0; j < columns.length; j++)
        {
            let column = columns[j];

            switch(j)
            {
                //Name
                case 0:
                    try
                    {
                        obj.carga = column.innerHTML.substring(0, column.innerHTML.length - 1);
                    }
                    catch(e) { break; }
                    break;
                //DLC
                case 1:
                    try
                    {
                        obj.dlc = column.children[0].innerHTML;
                    }
                    catch(e) { break; }
                    break;
                //Peso
                case 2:
                    try
                    {
                        obj.peso = (parseFloat(column.innerHTML.replace(',', '') ) * 0.45359237) + ' kg(s)';
                    }
                    catch(e) { break; }
                    break;
                //Tipos
                case 5:
                    let contents = column.getElementsByTagName('li');
                    for(let k = 0; k < contents.length; k++)
                    {
                        let content = contents[k];

                        try
                        {
                            obj.types.push(content.innerHTML);
                        }
                        catch(e) {continue;}
                    }
                    break;
                //Imagem
                case 6:
                    try
                    {
                        obj.icon = column.children[0].getAttribute('href');
                    }
                    catch(e) { break; }
                    break;
                //Nenhum desses acima.
                default: break;
            }
        }
        objs.push(obj);
    }

    console.log(JSON.stringify(objs) );

    return JSON.stringify(objs);
}