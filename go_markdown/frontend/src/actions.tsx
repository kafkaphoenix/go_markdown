//import {Save, SendMarkdownToRenderer, Open, Export} from "../wailsjs/go/main/App";

export const updateValue = async (event: React.ChangeEvent<HTMLTextAreaElement>, setMarkdownFile: React.Dispatch<React.SetStateAction<string>>) => {
    // const value = event.target.value
    // const html = await SendMarkdownToRenderer(value) // ask the backend to convert markdown to html
    // setMarkdownFile(html);
}

export const newAction = async (
    markdownFile: string,
    setMarkdownFile: React.Dispatch<React.SetStateAction<string>>,
    setFileName: React.Dispatch<React.SetStateAction<string>>,
    ref: React.RefObject<any>
) => {
    if (markdownFile.length > 0) {
        if (!window.confirm('Do you want to create a new document?')) {
        return;
        }
    }
    setMarkdownFile('');
    setFileName('');
    if (ref.current) {
        ref.current.value = ''; // clear the text area
    }
}

export const openAction = async (
    setMarkdownFile: React.Dispatch<React.SetStateAction<string>>,
    setFileName: React.Dispatch<React.SetStateAction<string>>,
    ref: React.RefObject<any>
) => {
    // const res = await Open(); // ask the backend to open a file
    // setMarkdownFile(res.html ?? "")
    // if (ref.current) {
    //     ref.current.value = res.content ?? "";
    // }
    // setFileName(res.name ?? "")
}

export const saveAction = async () => {
    try {
        // const res = await Save() // ask the backend to save the file
        // alert('file saved!' + res);
    } catch(e) {
        alert('error saving file: ' + e);
    }
}

export const exportAction = async () => {
    try {
        // await Export(); // ask the backend to export the file
        alert('file exported!');
    } catch (e) {
        alert("error exporting file: " + (e as Error).toString())
    }
}