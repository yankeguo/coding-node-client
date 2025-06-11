# Token

用于wiki 压缩包导入时的验证

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AuthToken** | **string** | 验证文件的Token（用于导入wiki zip import 使用） | [optional] [default to '']
**Provider** | **string** | cos存储对象 | [optional] [default to '']
**SecretId** | **string** | cos上传的Id | [optional] [default to '']
**SecretKey** | **string** | cos上传的key （用于导入wiki zip import 使用） | [optional] [default to '']
**Time** | **number** | 获取token 的时间（用于导入wiki zip import使用） | [optional] [default to undefined]
**UpToken** | **string** | 上传文件的Token | [optional] [default to '']
**UploadLink** | **string** | 上传地址 | [optional] [default to '']

## Example

```typescript
import { Token } from './api';

const instance: Token = {
    AuthToken,
    Provider,
    SecretId,
    SecretKey,
    Time,
    UpToken,
    UploadLink,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
