export function combineVectorStoreInfo(docs){
    return docs.map((doc)=>doc.pageContent).join('\n\n')
}