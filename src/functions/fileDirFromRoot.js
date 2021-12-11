import { fileURLToPath } from 'url';
import { dirname , join} from 'path';


const fileDirFromRoot = (relativePath) => {

    const __filename = fileURLToPath(import.meta.url);
    const __dirname =  join(dirname(__filename), '../../') ;

    const filePath = join(__dirname, relativePath);

    return filePath;

}


export default fileDirFromRoot;