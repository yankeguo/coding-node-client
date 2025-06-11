# DifferentOfCommit

请求之间的文件差别

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ChangeType** | **string** | 修改类型 | [optional] [default to '']
**Deletions** | **number** | 删除的行数 | [optional] [default to undefined]
**Insertions** | **number** | 新增的行数 | [optional] [default to undefined]
**Name** | **string** | 提交的名称 | [optional] [default to '']
**Path** | **string** | 文件路径 | [optional] [default to '']

## Example

```typescript
import { DifferentOfCommit } from './api';

const instance: DifferentOfCommit = {
    ChangeType,
    Deletions,
    Insertions,
    Name,
    Path,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
