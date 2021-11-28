import Handlebars from 'handlebars';
import path from 'path'
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs'



const htmlCompailer = ({filePathDir , data}) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = dirname(__filename);

    const templateDir = path.join(__dirname, '../../templates/'); 
    const filePath = path.join(templateDir, `/${filePathDir}`); 
    
    const source = fs.readFileSync(filePath, 'utf8');
    const template = Handlebars.compile(source);
    const htmlSrc = template(data);

    return htmlSrc;

}

export default htmlCompailer;