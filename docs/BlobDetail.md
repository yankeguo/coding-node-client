# BlobDetail

git Blob 信息

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**BlobSha** | **string** | blob 的 Sha 值 | [optional] [default to '']
**Content** | **string** | blob 内容使用 base64编码后的内容 | [optional] [default to '']
**Encoding** | **string** | 编码方式(目前就base64一种) | [optional] [default to '']
**Size** | **number** | blob大小(byte) | [optional] [default to undefined]

## Example

```typescript
import { BlobDetail } from './api';

const instance: BlobDetail = {
    BlobSha,
    Content,
    Encoding,
    Size,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
