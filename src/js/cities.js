function ExecuteScript() 
{ 
    console.log('Executando script!');
    
    let element = document.getElementsByTagName('tbody')[0];

    let rows = element.getElementsByTagName('tr');
    let objs = [];

    for(let i = 0; i < rows.length; i++)
    {
        let row = rows[i];
        let columns = row.getElementsByTagName('td');
        let city = '';

        for(let j = 0; j < columns.length; j++)
        {
            let column = columns[j];

            //Cidade
            if(j == 0)
            {
                try
                {
                    for(let k = 0; k < column.children.length; k++)
                    {
                        let element = column.children[k];
                        if(element.tagName.toLowerCase() != 'a')
                            continue;

                        city = element.innerHTML;
                        break;
                    }
                }
                catch(e) { console.log('Exceção lançada: ' + e); }
            }
            //Outras informações
            else continue;
        }

        if(typeof city === 'string' && city != '')
            objs.push(city);
    }

    console.log(JSON.stringify(objs) );

    return JSON.stringify(objs);
}