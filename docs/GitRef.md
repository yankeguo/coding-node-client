# GitRef

仓库分支

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AnnotatedTag** | **boolean** | 是否是附注标签 | [optional] [default to false]
**DisplayName** | **string** | 展示名 | [optional] [default to '']
**FullMessage** | **string** | 最后一次提交全部信息 | [optional] [default to '']
**Name** | **string** | 名字 | [optional] [default to '']
**ObjectId** | **string** | 对象id | [optional] [default to '']
**RefObjectId** | **string** | 分支objectId | [optional] [default to '']
**ShortMessage** | **string** | 最后一次提交简短信息 | [optional] [default to '']

## Example

```typescript
import { GitRef } from './api';

const instance: GitRef = {
    AnnotatedTag,
    DisplayName,
    FullMessage,
    Name,
    ObjectId,
    RefObjectId,
    ShortMessage,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
