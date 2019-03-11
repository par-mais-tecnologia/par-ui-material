import React from 'react'
import { getPropsInfo } from './functions';


const Th = ({ children }) => (
  <th style={{ padding: '20px', fontWeight: '400'}}>{children}</th>
)

const Td = ({ children }) => (
  <td align="left" style={{ fontSize: '12px', padding: '12px 20px', fontWeight: '200'}}>{children}</td>
)

const Table = ({ properties }) => {
  return (
    <table width="600px" border-collapse="collapse" collspacing="0" cellSpacing="0" style={{
      fontFamily: "'Source Code Pro', monospace",
      margin: '15px auto',
      boxShadow: "rgb(206, 212, 222) 0px 0px 0px 1px",
      backgroundColor: "transparent",
      borderSpacing: "0px",
      borderCollapse: "collapse",
      borderStyle: "hidden",
      borderRadius: "2px",
      color: "rgb(19, 22, 31)",
      overflowY: "hidden",
    }}>
      <thead style={{ 
        color: 'rgb(125, 137, 156)',
        fontFamily: "'Source Code Pro', monospace",
        fontSize: '14px',
        background: 'rgb(238, 241, 245) none repeat scroll 0% 0%',
        textAlign: 'left'
      }}>
        <tr>
          <Th>Property</Th>
          <Th>Type</Th>
          <Th>Required</Th>
          <Th>Default</Th>
        </tr>
      </thead>
      <tbody>
        {Object.keys(properties).map(key => (
          <tr key={properties[key].name}>
            <Td>{properties[key].name}</Td>
            <Td>{properties[key].type.name}</Td>
            <Td>{properties[key].required ? 'Yes' : 'No'}</Td>
            <Td>{properties[key].defaultValue && properties[key].defaultValue.value}</Td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const PropsTable = ({ of: component }) => {
  if (!component.propTypes && !component.defaultProps) {
      return null;
  }

  let properties = {}

  if (component.Naked) {
    properties = getPropsInfo(component.Naked)
  } else {
    properties = getPropsInfo(component)
  }

  return (
    <Table properties={properties} />
  )
}

export default PropsTable