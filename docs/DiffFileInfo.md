# DiffFileInfo

文件差异信息汇总详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Deletions** | **number** | 总删除行数 | [optional] [default to undefined]
**DifferentLines** | [**Array&lt;DifferentLine&gt;**](DifferentLine.md) | 差异信息 | [optional] [default to undefined]
**Insertions** | **number** | 总新增行数 | [optional] [default to undefined]

## Example

```typescript
import { DiffFileInfo } from './api';

const instance: DiffFileInfo = {
    Deletions,
    DifferentLines,
    Insertions,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
