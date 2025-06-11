# StatusCheckResult

查询提交对应的流水线状态

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**CommitSha** | **string** | 提交sha | [optional] [default to '']
**Context** | **string** | 流水线文本内容 | [optional] [default to '']
**CreateDate** | **number** | 记录创建时间 | [optional] [default to undefined]
**DepotId** | **number** | 仓库路径 | [optional] [default to undefined]
**Description** | **string** | 流水线状态描述 | [optional] [default to '']
**State** | **string** | 构建状态 | [optional] [default to '']
**TargetURL** | **string** | 流水线链接地址 | [optional] [default to '']

## Example

```typescript
import { StatusCheckResult } from './api';

const instance: StatusCheckResult = {
    CommitSha,
    Context,
    CreateDate,
    DepotId,
    Description,
    State,
    TargetURL,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
