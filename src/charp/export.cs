string pathToExport = "W:\\Programming\\Power Automate\\truck-simulator-extract\\result";

if(!System.IO.Directory.Exists(pathToExport) )
{
    System.IO.Directory.CreateDirectory(pathToExport);
}

var stream = System.IO.File.Create(pathToExport + "\\" + "cargosJson" + ".json");
for(int i = 0; i < cargosJson.Length; i++)
{
    stream.WriteByte( ((byte) cargosJson[i] ) );
}

stream.Dispose();

stream = System.IO.File.Create(pathToExport + "\\" + "citiesJson" + ".json");
for(int i = 0; i < citiesJson.Length; i++)
{
    stream.WriteByte( ((byte) citiesJson[i] ) );
}

stream.Dispose();

stream = System.IO.File.Create(pathToExport + "\\" + "companiesJson" + ".json");
for(int i = 0; i < companiesJson.Length; i++)
{
    stream.WriteByte( ((byte) companiesJson[i] ) );
}

stream.Dispose();

