import React, { useState } from 'react';
import { message, Button, Upload, Icon } from 'antd';
import { xlsxCgiToData, roleXlsxToData } from '../constants/index';
import XLSX from 'xlsx'

// const findObjKeyByValue = (data, value, compare = (a, b) => a === b) =>
//   Object.keys(data).find(k => compare(data[k], value))

const fmFilesData = (data, name) => {
  const newData = []
  const xlsxData = name === 'roles.xlsx' ? roleXlsxToData : xlsxCgiToData;
  data.forEach(item => {
    const tempObj = {}
    Object.keys(item).forEach(key => {
      const newKey = xlsxData[key.split('\n')[0].trim()].type || key.split('\n')[0].trim()
      const value = item[key]
      tempObj[newKey] = value
    })
    newData.push(tempObj)
  })
  return newData
}

// to do del upload compont
const UploadFile = ({
  submitFile,
  btnText = 'Submit File',
  disabled,
  showFileList = true,
  accept = '.xlsx',
  showIcon = true,
  showMargin = true,
  blankrows = false
}) => {
  const [fileList, setFileList] = useState([])

  const updateData = (result, fileName) => {
    let data = result
    data = (result || []).map(item => {
      return Object.keys(item).reduce((resultObj, key) => {
        resultObj[key] = item[key].trim()
        return resultObj
      }, {})
    })

    data = data.filter(row => Object.values(row).some(value => value)) // filter blank rows

    submitFile(data, fileName)
  }

  const uploadProp = {
    name: 'file',
    action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76', //bad option
    headers: {
      authoriztion: 'authorization-text'
    },
    accept,
    onChange: info => {
      if (info.file.status === 'removed') {
        return
      }
      if (info.fileList.length > 1) {
        message.error(`only can upload one file`)
        return false
      }
      let fileList = info.fileList
      fileList = fileList.slice(-1)
      if (!['done', 'error'].includes(info.file.status)) {
        const { originFileObj, name } = info.file
        const fileReader = new FileReader()
        fileReader.onload = ev => {
          const data = ev.target.result
          const wk = XLSX.read(data, { type: 'binary' })
          const sheets = wk.Sheets
          let filesData = []
          for (const sheet in sheets) {
            filesData = filesData.concat(
              XLSX.utils.sheet_to_json(sheets[sheet], {
                defval: '',
                raw: false,
                range: 0,
                blankrows
              })
            )
          }
          
          updateData(fmFilesData(filesData, name), name)
        }
        fileReader.readAsBinaryString(originFileObj)
        fileList[0].status = 'done'
      } else if (info.file.status === 'error') {
        message.error(`${info.file.name} file upload failed.`)
      }
      if (info.file.status !== 'uploading' && !showFileList) {
        setFileList([])
      } else {
        setFileList([...info.fileList])
      }
    }
  }
  if (!showFileList) {
    uploadProp.fileList = fileList
  }

  return (
    <Upload {...uploadProp}>
      <Button style={{ marginLeft: showMargin ? 16 : 0 }} disabled={disabled}>
        {showIcon && <Icon type='upload' />} {btnText}
      </Button>
    </Upload>
  )
}

export default UploadFile
