# GitFileItem

文件详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Content** | **string** | 加密后文件的内容 | [optional] [default to '']
**ContentSha256** | **string** | 文件内容的hash结果 | [optional] [default to '']
**Encoding** | **string** | 加密形式 | [optional] [default to '']
**FileName** | **string** | 文件名 | [optional] [default to '']
**FilePath** | **string** | 文件路径 | [optional] [default to '']
**Sha** | **string** | commitID | [optional] [default to '']
**Size** | **number** | 文件大小 | [optional] [default to undefined]

## Example

```typescript
import { GitFileItem } from './api';

const instance: GitFileItem = {
    Content,
    ContentSha256,
    Encoding,
    FileName,
    FilePath,
    Sha,
    Size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
