# DepotSpecTeamLevelParam

仓库规范 - 新增团队规范的参数

## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**AllowPushWildRef** | **boolean** | 允许创建规定分支类型以外的分支 | [default to false]
**DepotBranchTypeList** | [**Array&lt;DepotBranchTypeParam&gt;**](DepotBranchTypeParam.md) | 分支类型列表 | [optional] [default to undefined]
**DepotMergeRequestRuleList** | [**Array&lt;DepotMergeRequestRuleParam&gt;**](DepotMergeRequestRuleParam.md) | 合并方向规则列表 | [optional] [default to undefined]
**Description** | **string** | 仓库规范描述 | [optional] [default to '']
**Name** | **string** | 规范的名字唯一，当名字是已有规范的名字时，为修改；当名字不是已有规范名字时为新增 | [default to '']
**ReName** | **string** | 当需要修改已有规范的名字时，需要填写新名字 | [optional] [default to '']

## Example

```typescript
import { DepotSpecTeamLevelParam } from './api';

const instance: DepotSpecTeamLevelParam = {
    AllowPushWildRef,
    DepotBranchTypeList,
    DepotMergeRequestRuleList,
    Description,
    Name,
    ReName,
};
```

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)
