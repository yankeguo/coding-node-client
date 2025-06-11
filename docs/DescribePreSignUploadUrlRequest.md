# DescribePreSignUploadUrlRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ContentType** | **string** | 内容类型，和web端的文件上传时content-type是一样的 | [optional] [default to '']
**FileName** | **string** | 文件名 | [optional] [default to '']
**FolderId** | **number** | 若上传项目协同附件场景时，不需要配置或默认为0即可。若用于上传到文件网盘，可以设置文件夹ID, 用于文件存放位置，ID值通过open api【创建文件夹】获取 | [optional] [default to FolderIdEnum_NUMBER_0]
**FolderType** | **number** | 文件夹类型，0: 常规文件夹, 1:隐藏文件夹。 如果是用于项目协同上传附件的场景，配置为1；如果是上传到文件网盘则配置为0。 | [optional] [default to FolderTypeEnum_NUMBER_0]
**ProjectName** | **string** | 项目名称 | [optional] [default to '']

## Example

```typescript
import { DescribePreSignUploadUrlRequest } from './api';

const instance: DescribePreSignUploadUrlRequest = {
    ContentType,
    FileName,
    FolderId,
    FolderType,
    ProjectName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
