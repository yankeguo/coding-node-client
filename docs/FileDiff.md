# FileDiff

文件差别详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeType** | **string** | 操作类型,具体值为: ADD(添加), MODIFY(修改), DELETE(删除), REPLACE(替换) | [optional] [default to '']
**Deletions** | **number** | 删除的行数 | [optional] [default to undefined]
**DiffLines** | [**Array&lt;DifferentLine&gt;**](DifferentLine.md) | Diff Line | [optional] [default to undefined]
**Insertions** | **number** | 新增的行数 | [optional] [default to undefined]
**ObjectId** | **string** | 请求的objectid | [optional] [default to '']
**Path** | **string** | 文件路径 | [optional] [default to '']

## Example

```typescript
import { FileDiff } from './api';

const instance: FileDiff = {
    ChangeType,
    Deletions,
    DiffLines,
    Insertions,
    ObjectId,
    Path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
