import React, { createContext, useState } from 'react';
import ModalFilter from '../components/ModalFilter';

interface ModalContentData {
    visible: boolean;
    setVisible(visible:boolean): void
    modal:React.FC | null
    setModal(modal:React.FC): void 
} 

export const ModalContext = createContext<ModalContentData>({} as ModalContentData );

export const ModalProvider: React.FC = ({ children }) => {
    const [visible,setVisible] = useState(false)
    const [modal,setModal] = useState<React.FC | null>(null)


 return (
   <ModalContext.Provider value={{ visible,setVisible,modal,setModal}}>
     {children}
   </ModalContext.Provider>
 );
};



export function useModal() {
  const context = React.useContext(ModalContext)
  return context
}
