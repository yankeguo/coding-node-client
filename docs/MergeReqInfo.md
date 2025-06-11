# MergeReqInfo

合并请求详情

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Describe** | **string** | 描述,为 markdown 格式 | [optional] [default to '']
**SourceBranch** | **string** | 源分支 | [optional] [default to '']
**Status** | **string** | 合并状态,状态值如下:  CANMERGE:状态可自动合并;  ACCEPTED:状态已接受;  CANNOTMERGE:状态不可自动合并;  REFUSED:状态已拒绝(关闭);  CANCEL: 取消;  MERGING:正在合并中;  ABNORMAL:状态异常; | [optional] [default to '']
**TargetBranch** | **string** | 目标分支 | [optional] [default to '']
**Title** | **string** | 合并标题 | [optional] [default to '']

## Example

```typescript
import { MergeReqInfo } from './api';

const instance: MergeReqInfo = {
    Describe,
    SourceBranch,
    Status,
    TargetBranch,
    Title,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
