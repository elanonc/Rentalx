import {parse} from "csv-parse";

import fs from "fs";


class ImportCategoryUseCase {
    execute(file: Express.Multer.File): void {
        const stream = fs.createReadStream(file.path); // utilizando essa função, podemos ler o arquivo por partes

        //const parseFile = csvParse();
        const parseFile = parse();

        stream.pipe(parseFile); // a cada "parte" do arquivo lido, o pipe possa enviar essa parte pra onde vamos determinar 

        parseFile.on("data", async(line) => {
            console.log(line);
        });
    }
} 

export { ImportCategoryUseCase }