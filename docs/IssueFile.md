# IssueFile

事项附件

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**FileId** | **number** | 文件 Id | [optional] [default to undefined]
**Name** | **string** | 文件名称 | [optional] [default to '']
**Size** | **number** | 文件大小 | [optional] [default to undefined]
**Type** | **number** | 类型：  1-文本，  2-图片，  3-二进制文件，  4-SVG | [optional] [default to undefined]
**Url** | **string** | 临时下载地址 | [optional] [default to '']

## Example

```typescript
import { IssueFile } from './api';

const instance: IssueFile = {
    FileId,
    Name,
    Size,
    Type,
    Url,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
